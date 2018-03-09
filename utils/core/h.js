exports.H = function(command, a, b) {
    command = command instanceof RegExp ? command.toString().slice(1, -1) : command;
    if (!command || typeof(command) !== 'string') {
        throw new Error('invalidParameter');
    }
    var data = a && b ? a : null;
    data = (data && typeof(data) === 'object') ? JSON.stringify(data) : data;
    data = data ? ('' + data) : '';
    var content = a && b ? (b || '') : (a || '');
    content = Array.isArray(content) ? content.join('') : content;
    if (typeof(content) !== 'string') {
        throw new Error('invalidParameter');
    }
    command = prepareCMD(command);
    return processCMD(command, data, content);
    function prepareCMD(cmd) {
        if (/\s{2,}/.test(cmd)) {
            throw new Error('No multiple spaces.');
        }
        if (isVarCMD(cmd)) {
            return prepareVarCMD(cmd);
        }
        else {
            return prepareGenCMD(cmd);
        }
    }
    function isVarCMD(v) {
        return v.startsWith('--');
    }
    function prepareVarCMD(cmd) {
        cmd = cmd.split(/\s*:\s*/);
        var k = cmd[0];
        var v = prepareParameterValue(cmd[1]);
        var err = validateParameterValue(v);
        if (err) {
            throw err;
        }
        return [k, v];
    }
    function prepareParameterValue(v) {
        return v;
    }
    function validateParameterValue(/* v */) {
        return null;
    }
    function prepareGenCMD(cmd) {
        var m = cmd.match(/\|/g);
        if (m && m.length > 1) {
            throw new Error('No multiple "|".');
        }
        m = cmd.match(/(\s*)\|(\s*)/);
        if (m) {
            if (m[1].length > 0 || m[2].length > 0) {
                throw new Error('No "|" surrounded with spaces.');
            }
        }
        var map = {
            'Doc': '<!DOCTYPE html><html{modifiers}>{content}</html>',
            'Head': '<head>{content}</head>',
            'Meta': '<meta{modifiers}>',
            'Title': '<title>{content}</title>',
            'Body': '<body{modifiers}>{content}</body>'
        };
        cmd = cmd.split('|');
        if (cmd[1]) {
            if (/\)(?!@|\s|$)/.test(cmd[1])) {
                throw new Error('Missing space after function\'s ")".');
            }
            if (/\)(?!@lg|@md|@sm|@xs|\s|$)/.test(cmd[1])) {
                throw new Error('Unsupported @media query.');
            }
            if (/\b[a-z]\w+\(/.test(cmd[1])) {
                throw new Error('Function must start with capital letter.');
            }
        }
        var controls = cmd[1] ? cmd[1].match(/[A-Z].*?\)(?:@lg|@md|@sm|@xs)?/g) : [];
        var template = map[cmd[0]] || null;
        if (template) {
            return [cmd[0], controls, template];
        }
        else {
            throw new Error('Invalid left-hand "' + cmd[0] + '" operator.');
        }
    }
    function processCMD(cmd, data, content) {
        var html = '';
        if (isVarCMD(cmd[0])) {
            setVar(cmd[0], cmd[1]);
        }
        else {
            if (isNonBodyCMD(cmd[0])) {
                html = inlineModifiersForNonBodyCMD(cmd);
            }
            else {
                html = inlineModifiersForInBodyCMD(cmd);
            }
            return html.replace('{content}', content);
        }
    }
    function setVar(k, v) {
        var cache = exports.malloc('__H');
        var vars = cache('vars') || {};
        if (vars[k]) {
            throw new Error('No duplicate variable.');
        }
        else {
            vars[k] = v;
            cache('vars', vars);
        }
    }
    function isNonBodyCMD(v) { // COUNT OF NOT BODY TAGS < BODY TAGS - BETTER PERFORMANCE
        return ['Doc', 'Head', 'Meta', 'Title'].indexOf(v) >= 0;
    }
    function inlineModifiersForNonBodyCMD(cmd) {
        var map = {
            'Doc': [
                ['Lang', 'lang']
            ],
            'Head': [],
            'Meta': [
                ['Charset', 'charset'],
                ['Name', 'name'],
                ['Property', 'property'],
                ['HttpEquiv', 'http-equiv'],
                ['Content', 'content']
            ],
            'Title': []
        };
        var mapPairs = map[cmd[0]];
        var controls = parseNonBodyControls(cmd[1]);
        var modifiers = '';
        var previous = -1;
        for (var i = 0, len = controls.length; i < len; i++) {
            var control = controls[i];
            var found = false;
            for (var j = 0, l = mapPairs.length; j < l; j++) {
                var pair = mapPairs[j];
                if (pair[0] === control[0]) {
                    if (j < previous) {
                        return throwRightHandFunctionOrderMismatchError(mapPairs, controls);
                    }
                    else { // FUNCTION WAS FOUND AND FUNCTIONS CHAIN IS IN SAME ORDER AS IN MAP
                        found = true;
                        modifiers += ' ' + control[0] + '="' + control[1] + '"';
                        previous = j;
                        break;
                    }
                }
            }
            if (!found) {
                throw new Error('Unsupported right-hand function "' + control[0] + '()".');
            }
        }
        return cmd[2].replace('{modifiers}', modifiers);
    }
    function throwRightHandFunctionOrderMismatchError(mapPairs, controls) {
        var msg = 'Incorrect right-hand function order, expected:';
        for (var i = 0, l = mapPairs.length; i < l; i++) {
            var pair = mapPairs[i];
            for (var j = 0, ll = controls.length; j < ll; j++) {
                var control = controls[j];
                if (control[0] === pair[0]) {
                    msg += ' ' + pair[0] + '()';
                    break;
                }
            }
        }
        throw new Error(msg + '.');
    }
    function parseNonBodyControls(arrWithControlStrings) {
        var arr = [];
        for (var i = 0; i < arrWithControlStrings.length; i++) {
            var str = arrWithControlStrings[i];
            var tmp = str.split('(');
            if (!Array.isArray(tmp) || tmp.length !== 2) {
                throw new Error('Unable to parse right-hand function "' + str + '".');
            }
            var k = tmp[0];
            if (!k) {
                throw new Error('Unable to parse right-hand function "' + str + '".');
            }
            var m = str.match(/\((.*)\)/);
            if (m) {
                var v = m[1] || '';
                arr.push([k, v]);
            }
            else {
                throw new Error('Unable to parse right-hand function "' + str + '".');
            }
        }
        return arr;
    }
    function inlineModifiersForInBodyCMD(/* cmd */) {
        return 'Not implemented yet.';
    }
};

// function normalizeCSSKeyframes(v) {
//     var arr = [];
//     var index = 0;
//     while (index !== -1) {
//         index = v.indexOf('@keyframes', index + 1);
//         if (index === -1) {
//             continue;
//         }
//         var counter = 0;
//         var end = -1;
//         for (var indexer = index + 10; indexer < v.length; indexer++) {
//             if (v[indexer] === '{') {
//                 counter++;
//             }
//             if (v[indexer] !== '}') {
//                 continue;
//             }
//             if (counter > 1) {
//                 counter--;
//                 continue;
//             }
//             end = indexer;
//             break;
//         }
//         if (end === -1) {
//             continue;
//         }
//         var css = v.substring(index, end + 1);
//         arr.push({
//             name: 'keyframes',
//             property: css
//         });
//     }
//     var output = [];
//     var len = arr.length;
//     for (var i = 0; i < len; i++) {
//         var name = arr[i].name;
//         var property = arr[i].property;
//         if (name !== 'keyframes') {
//             continue;
//         }
//         var plus = property.substring(1);
//         var delimiter = '\n';
//         var updated = '@' + plus + delimiter;
//         updated += '@-webkit-' + plus + delimiter;
//         updated += '@-moz-' + plus + delimiter;
//         updated += '@-o-' + plus + delimiter;
//         v = strReplace(v, property, '@[[' + output.length + ']]');
//         output.push(updated);
//     }
//     len = output.length;
//     for (var j = 0; j < len; j++) {
//         v = v.replace('@[[' + j + ']]', output[j]);
//     }
//     return v;
// }

// function strReplace(str, find, to) {
//     var beg = str.indexOf(find);
//     return beg === -1 ? str : (str.substring(0, beg) + to + str.substring(beg + find.length));
// }