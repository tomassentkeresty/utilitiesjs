!function(){"use strict";Array.prototype.find=function(e,i){for(var o="function"==typeof e,n=void 0!==i,r=0,t=this.length;r<t;r++)if(o){if(e(this[r],r))return this[r]}else if(n){if(this[r]&&this[r][e]===i)return this[r]}else if(this[r]===e)return this[r];return null},Array.prototype.findIndex=function(e,i){for(var o="function"==typeof e,n=void 0!==i,r=0,t=this.length;r<t;r++)if(o){if(e(this[r],r))return r}else if(n){if(this[r]&&this[r][e]===i)return r}else if(this[r]===e)return r;return-1},Array.prototype.remove=function(e,i){for(var o="function"==typeof e,n=void 0!==i,r=[],t=0,s=this.length;t<s;t++)o?e.call(this,this[t],t)||r.push(this[t]):n?this[t]&&this[t][e]!==i&&r.push(this[t]):this[t]!==e&&r.push(this[t]);return r},Array.prototype.unique=function(e){for(var i=[],o=0,n=0,r=this.length;n<r;n++){var t=this[n];if(e)if(0!==o){for(var s=!0,a=0;a<o;a++)if(i[a][e]===t[e]){s=!1;break}s&&(i.push(t),o++)}else i.push(t),o++;else-1===i.indexOf(t)&&i.push(t)}return i};var e="object"==typeof global?global:window;function i(e,o,n){if(!e)return e;var r,t,s=typeof e;if("object"!==s||e instanceof Date)return e;if(e instanceof Array){r=e.length,t=new Array(r);for(var a=0;a<r;a++)if("object"!==(s=typeof e[a])||e[a]instanceof Date){if(n&&"function"===s)continue;t[a]=e[a]}else t[a]=i(e[a],o,n);return t}for(var l in t={},e)if(!o||!o[l]){var d=e[l];if("object"!==(s=typeof d)||d instanceof Date){if(n&&"function"===s)continue;t[l]=d}else t[l]=i(e[l],o,n)}return t}e.Cor||(e.Cor={}),e.Cor.clone=i,e.Cor||(e.Cor={}),e.Cor.extend=function(e,o,n){if(!e||"object"!=typeof e)throw new Error("api-objA");if(!o||"object"!=typeof o)throw new Error("api-objB");void 0===n&&(n=!0);for(var r=Object.keys(o),t=r.length;t--;){var s=r[t];(n||void 0===e[s])&&(e[s]=i(o[s]))}return e};var o={"&":"amp","'":"#039",'"':"quot","<":"lt",">":"gt"};String.prototype.escape=function(){return this.replace(/(&|'|"|<|>)/g,function(e,i){return"&"+o[i]+";"||i})},String.prototype.padEnd||(String.prototype.padEnd=function(e,i){return e>>=0,i=String(void 0!==i?i:" "),this.length>e?String(this):((e-=this.length)>i.length&&(i+=i.repeat(e/i.length)),String(this)+i.slice(0,e))}),String.prototype.padStart||(String.prototype.padStart=function(e,i){return e>>=0,i=String(void 0!==i?i:" "),this.length>e?String(this):((e-=this.length)>i.length&&(i+=i.repeat(e/i.length)),i.slice(0,e)+String(this))});var n={" ":" ","߀":"0","Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ꜿ":"C","Ḉ":"C","ĆC":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ƈ":"C","Ȼ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ɗ":"D","Ɖ":"D","ᴅ":"D","Ꝺ":"D","Ð":"Dh","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","ɛ":"E","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","ᴇ":"E","ꝼ":"F","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","ɢ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","ȷ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","ϻ":"M","Ꞥ":"N","Ƞ":"N","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ɲ":"N","Ꞑ":"N","ᴎ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Þ":"Th","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ɑ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","Ƃ":"b","ｃ":"c","ⓒ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","Ƌ":"d","Ꮷ":"d","ԁ":"d","Ɦ":"d","ð":"dh","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ﬀ":"ff","ﬁ":"fi","ﬂ":"fl","ﬃ":"ffi","ﬄ":"ffl","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ꝿ":"g","ᵹ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ɭ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","л":"n","ԉ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ɔ":"o","ᴑ":"o","œ":"oe","ƣ":"oi","ꝏ":"oo","ȣ":"ou","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ρ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ʂ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","þ":"th","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z"};String.prototype.slug=function(e){e=e||60;for(var i=this.trim().toLowerCase().replace(/[^\u0000-\u007e]/g,function(e){return n[e]||e}),o="",r=i.length,t=0;t<r;t++){var s=i[t],a=i.charCodeAt(t);if(o.length>=e)break;a>31&&a<48?o.length>0&&"-"!==o[o.length-1]&&(o+="-"):(a>47&&a<58||a>94&&a<123)&&(o+=s)}var l=o.length-1;return"-"===o[l]?o.substring(0,l):o};var r={nbsp:" ",amp:"&",quot:'"',lt:"<",gt:">"};String.prototype.strip=function(){return this.replace(/<\/?[^>]+(>|$)/g,"").replace(/&(nbsp|amp|quot|lt|gt);/g,function(e,i){return r[i]||i})},e.Cor||(e.Cor={}),e.Cor.all=function(e,i,o){if(!Array.isArray(e))throw new Error("api-arr");if("function"!=typeof i)throw new Error("api-fn");if(void 0===o&&(o=Function.prototype),"function"!=typeof o)throw new Error("api-next");var n=e.length;if(0===n)return o(null,e);var r=!1,t=new Array(n),s=n;e.forEach(function(e,n){i(e,function(e,i){if(!r)return e?(r=!0,o(e)):(t[n]=i,0==--s?o(null,t):void 0)})})};var t={"text/plain":".txt","text/markdown":".md","text/html":".html","application/xml":".xml","text/xml":".xml","application/json":".json","font/woff":".woff","font/woff2":".woff2","font/otf":".otf","font/ttf":".ttf","application/vnd.ms-fontobject":".eot","application/javascript":".js","text/css":".css","image/jpeg":".jpg","image/png":".png","image/gif":".gif","image/svg+xml":".svg","image/x-icon":".ico","video/mp4":".mp4","audio/mp3":".mp3","application/x-shockwave-flash":".swf","application/pdf":".pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document":".docx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx","application/msword":".doc","application/vnd.ms-excel":".xls","application/zip":".zip","application/x-rar-compressed":".rar"};function s(e,i,o,n){for(var r,t,s,d,c,p,u,f,w,h,g,m=/[a-z]/i,b=-1,v="";-1!==r;)if(-1!==(r=n.indexOf("(",b+2)))if(m.test(n[r-1]))if(-1===(t=n.lastIndexOf(" ",r-2))?t=0:t+=1,-1!==(s=n.indexOf(")",r+1))){if(s+=1,-1===(b=n.indexOf(" ",s))&&(b=n.length),!(c=i[d=n.slice(t,r)]))throw new Error("bad rule: "+d);u="!"===(p=n.slice(s,b))[0],f=p.slice(u?2:1),w=!c.helper&&(":"===p[0]||u&&":"===p[1])?o[f]:void 0,h=!c.helper&&("@"===p[0]||u&&"@"===p[1])?parseInt(f):void 0,g=n.slice(r+1,s-1),c.helper?v=a(e,c,g)+v:v+=l(e,c,u,w,h,g)}else b=r+1;else b=r+2;return v?"\n"+v:""}function a(e,i,o){var n,r,t,s;for(o?(r=o.split(",")).unshift("."+e):r=["."+e],n=r.length;n--;)" "===(t=r[n])[0]&&(r[n]=t.slice(1));for(var a=1,l="",d=1;-1!==s;)-1!==(s=i.css.indexOf("$",a))&&(l+=i.css.slice(d,s),l+=r[i.css[s+1]]||void 0,d=s+2,a=s+3);return l+i.css.slice(d)+"\n"}function l(e,i,o,n,r,t){for(var s,a,l,d,c="",p=0;-1!==l;)s=t.indexOf("[",p),a=t.indexOf("]",p),-1===(l=Math.min(s,a))&&(l=Math.max(s,a)),-1!==l&&(c+=t.slice(p,l)+("["===t[l]?"(":")"),p=l+1);t=c+t.slice(p),c="",p=0;for(var u,f,w=/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})(\.\d+)/gi;d=w.exec(t);)c+=t.slice(p,d.index)+"rgba("+parseInt(d[1],16)+","+parseInt(d[2],16)+","+parseInt(d[3],16)+","+d[4]+")",p=d.index+d[0].length;for(f in t=c+t.slice(p),c=void 0,i.expand){for(c="",p=0,u=new RegExp("(?:^| )(?:"+f+")(?: |$)","g");d=u.exec(t);)d.index>0?(d.index-p>0&&(c+=t.slice(p,d.index)),c+=" ",p=d.index+1+f.length):p=f.length,c+=i.expand[f],u.lastIndex=p;t=c+t.slice(p)}u=void 0,c=void 0;var h="."+e;return n&&(h+=":"+n),h+="{"+i.css.replace(/\$/g,t||void 0)+"}",r>0&&(h="@media(min-width:"+r+"px){"+h+"}"),h+"\n"}function d(){for(var e=5,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-0123456789",o=i[Math.floor(Math.random()*(i.length-12))];e--;)o+=i[Math.floor(Math.random()*i.length)];return o}function c(e){if("[object Object]"!==Object.prototype.toString.call(e))throw new Error("api-obj");this.rules=e}e.Cor||(e.Cor={}),e.Cor.extension=function(e){return t[e]||null},e.Cor||(e.Cor={}),e.Cor.html=function(e,...i){var o,n,r,t,a={B:{css:"bottom:$"},BdA:{helper:!0,css:"\n$0{\n    border-width:1px;\n    border-style:solid}"},BdB:{helper:!0,css:"\n$0{\n    border-top-width:0;\n    border-right-width:0;\n    border-bottom-width:1px;\n    border-left-width:0;\n    border-style:solid}"},Bdbc:{css:"border-bottom-color:$"},Bdbw:{css:"border-bottom-width:$"},Bdc:{css:"border-color:$",expand:{t:"transparent"}},Bdlc:{css:"border-left-color:$",expand:{t:"transparent"}},Bdrad:{css:"border-radius:$"},Bdrc:{css:"border-right-color:$"},Bds:{css:"border-style:$",expand:{s:"solid"}},Bdw:{css:"border-width:$"},Bgc:{css:"background-color:$"},Bgi:{css:"background-image:$",expand:{n:"none"}},Bgp:{css:"background-position:$",expand:{c:"center"}},Bgr:{css:"background-repeat:$",expand:{nr:"no-repeat",rx:"repeat-x"}},Bgz:{css:"background-size:$",expand:{ct:"contain",cv:"cover"}},Bxsh:{css:"box-shadow:$"},Bxz:{css:"box-sizing:$",expand:{bb:"border-box"}},C:{css:"color:$"},Cf:{helper:!0,css:"\n$0:before,$0:after{\n    content:' ';\n    display:table}\n$0:after{clear:both}"},Cnt:{css:"content:$"},Cur:{css:"cursor:$",expand:{d:"default",p:"pointer"}},D:{css:"display:$",expand:{n:"none",b:"block",i:"inline",ib:"inline-block"}},Ell:{helper:!0,css:"\n$0{\n    max-width:100%;\n    white-space:nowrap;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    hyphens:none}\n$0:after{\n    content:'.';\n    font-size:0;\n    visibility:hidden;\n    display:inline-block;\n    overflow:hidden;\n    height:0;\n    width:0}"},Fl:{css:"float:$"},Fw:{css:"font-weight:$",expand:{n:"normal"}},Fz:{css:"font-size:$"},H:{css:"height:$"},IbBox:{helper:!0,css:"\n$0{\n    display:inline-block;\n    *display:inline;\n    zoom:1;\n    vertical-align:top}"},L:{css:"left:$"},Lh:{css:"line-height:$"},LineClamp:{helper:!0,css:"\n$0{\n    -webkit-line-clamp:$1;\n    max-height:$2;\n    display:-webkit-box;\n    -webkit-box-orient:vertical;\n    overflow:hidden}\n@supports(display:-moz-box){$0{display:block}}\na$0{\n    display:inline-block;\n    display:-webkit-box;\n    *display:inline;\n    zoom:1}\na$0:after{\n    content:'.';\n    font-size:0;\n    visibility:hidden;\n    display:inline-block;\n    overflow:hidden;\n    height:0;\n    width:0}"},List:{css:"list-style-type:$",expand:{n:"none"}},M:{css:"margin:$"},Mah:{css:"max-height:$"},Maw:{css:"max-width:$"},Mb:{css:"margin-bottom:$"},Mih:{css:"min-height:$"},Miw:{css:"min-width:$"},Ml:{css:"margin-left:$"},Mr:{css:"margin-right:$"},Mt:{css:"margin-top:$"},Mx:{css:"\n    margin-left:$;\n    margin-right:$",expand:{a:"auto"}},My:{css:"\n    margin-top:$;\n    margin-bottom:$"},O:{css:"outline:$",expand:{n:"none"}},Op:{css:"opacity:$"},Ov:{css:"overflow:$",expand:{a:"auto",h:"hidden"}},Ovx:{css:"overflow-x:$",expand:{h:"hidden"}},Ovy:{css:"overflow-y:$",expand:{a:"auto"}},P:{css:"padding:$"},Pb:{css:"padding-bottom:$"},Pl:{css:"padding-left:$"},Pos:{css:"position:$",expand:{a:"absolute",r:"relative"}},Pr:{css:"padding-right:$"},Pt:{css:"padding-top:$"},Px:{css:"\n    padding-left:$;\n    padding-right:$"},Py:{css:"\n    padding-top:$;\n    padding-bottom:$"},R:{css:"right:$"},StretchedBox:{helper:!0,css:"\n$0{\n    position:absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0}"},T:{css:"top:$"},Ta:{css:"text-align:$",expand:{c:"center",r:"right"}},Td:{css:"text-decoration:$",expand:{n:"none",u:"underline"}},TranslateX:{css:"transform:translateX($)"},Trs:{css:"transition:$"},Us:{css:"user-select:$",expand:{n:"none"}},Va:{css:"vertical-align:$",expand:{m:"middle"}},W:{css:"width:$"},Z:{css:"z-index:$"}},l={f:"focus",h:"hover",a:"active",":b":":before",":a":":after",":ph":":placeholder"},c={"&":"amp","'":"#039",'"':"quot","<":"lt",">":"gt"},p="";for(o=0,n=e.length;o<n;o++)p+=e[o],o<=n-2&&(p+="@[["+o+"]]");p=p.trim();for(var u,f,w,h,g,m,b=/[a-z]/,v=/[a-z"]>/g,y=0,x="";r=v.exec(p);)for(f=u=r.index+2,w=!0;w;)-1!==(h=p.indexOf("<",f))?"/"===(t=p[h+1])||b.test(t)?(w=!1,x+=p.slice(y,u)+p.slice(u,h).trim(),y=h):f=h+2:w=!1;p=x+p.slice(y),x="",y=0;var O,A,E,k,S=/(&|'|"|<|>)/g,$=0;for(o=0,n=i.length;o<n&&(E="@[["+o+"]]",-1!==(O=p.indexOf(E,$)));o++){if(!(g=i[o])||g.constructor!==Object&&g.constructor!==Array)g=""+g;else try{g=JSON.stringify(g)}catch(e){g=""+g}(m="!"!==p[O-1])&&(g=g.replace(S,function(e,i){return"&"+c[i]+";"})),A=m?O:O-1,p=p.slice(0,A)+g+p.slice(O+E.length),$=A+g.length}for(var T,C,M,N,j,z,L,B=2,U="";-1!==k;)if(-1!==(k=p.indexOf(' s="',B))){for(T=void 0,C=k-2,M=!0;M;)-1===(T=p.lastIndexOf("<",C))||b.test(p[T+1])?M=!1:C=T-3;-1!==T&&-1!==(N=p.indexOf('">',k+' s="'.length))?(N+='">'.length,j=d(),-1===(z=p.slice(T+2,k-1).indexOf(' class="'))?x+=p.slice(y,k+1)+'class="'+j+'">':(z+=T+2,L=p.indexOf('" ',z+' class="'.length),x+=p.slice(y,L)+" "+j+p.slice(L,k)+">"),y=N,U+=s(j,a,l,p.slice(k+' s="'.length,N-'">'.length)),B=k+' s="'.length+'">'.length+2):B+=8}return p=x+p.slice(y),x=void 0,U?"<style>"+U+"</style>"+p:p},c.prototype={prepareValidate:function(e){if("[object Object]"!==Object.prototype.toString.call(e))throw new Error("api-o");var i={};for(var o in this.rules)if(this.rules.hasOwnProperty(o)){var n=this.rules[o],r=e[o];"function"==typeof n.prepare&&(r=n.prepare(r,e),e[o]=r),n.validate&&!n.validate(r,e)&&(i[o]=!0)}return i},clean:function(e){if("[object Object]"!==Object.prototype.toString.call(e))throw new Error("api-o");var i={};for(var o in this.rules)this.rules.hasOwnProperty(o)&&(i[o]=e[o]);return i}},e.Cor||(e.Cor={}),e.Cor.Schema=c,e.Cor||(e.Cor={}),e.Cor.tid=function(){var e=new Date;return e.getFullYear()+"-"+(""+(e.getMonth()+1)).padStart(2,"0")+"-"+(""+e.getDate()).padStart(2,"0")+"-"+(""+e.getHours()).padStart(2,"0")+"-"+(""+e.getMinutes()).padStart(2,"0")},e.Cor||(e.Cor={}),e.Cor.uid=function(e){if(!Number.isInteger(e)||e<=0)throw new Error("api-len");for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-0123456789",o=i[Math.floor(Math.random()*(i.length-12))];--e;)o+=i[Math.floor(Math.random()*i.length)];return o},e.Cor||(e.Cor={}),e.Cor.userAgent=function(e){if(e&&"string"!=typeof e)throw new Error("api-str");function i(e,i){for(var o={},n=0,r=null;n<i.length&&!r;){for(var t=i[n],s=i[n+1],a=0,l=0;a<t.length&&!r;)if(r=t[a++].exec(e),Array.isArray(r)&&r.length>0)for(var d=0;d<s.length;d++){var c=r[++l],p=s[d];Array.isArray(p)&&p.length>0?2===p.length?u(p[1])?o[p[0]]=f(p[1](c)):o[p[0]]=f(p[1]):3===p.length?!u(p[1])||p[1].exec&&p[1].test?o[p[0]]=c?f(c.replace(p[1],p[2])):null:o[p[0]]=c?f(p[1](c,p[2])):null:4===p.length&&(o[p[0]]=c&&u(p[3])?f(p[3](c.replace(p[1],p[2]))):null):o[p]=f(c)||null}n+=2}return o;function u(e){return"function"==typeof e}function f(e){return"string"==typeof e&&e.replace(/\s+/g,"_").toUpperCase()||null}}function o(e,i){for(var o in i)if(Array.isArray(i[o])&&i[o].length>0){for(var n=0;n<i[o].length;n++)if(r(e,i[o][n]))return"?"===o?null:o}else if(r(e,i[o]))return"?"===o?null:o;return e;function r(e,i){return"string"==typeof e&&e.toLowerCase().indexOf(i.toLowerCase())>=0}}function n(e){return e.toLowerCase()}function r(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}e="string"==typeof e?e||"":window&&window.navigator&&window.navigator.userAgent||"";var t="name",s="version",a="vendor",l="model",d="type",c="MOBILE",p="TABLET",u={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{FIRE_PHONE:["SD","KF"]}},sprint:{model:{EVO_SHIFT_4G:"7373KT"},vendor:{HTC:"APA",SPRINT:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT_3.11":"NT3.51","NT_4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],VISTA:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/(opera\smini)\/([\w.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w.-]+)/i,/(opera).+version\/([\w.]+)/i,/(opera)[\/\s]+([\w.]+)/i],[t,s],[/(opios)[\/\s]+([\w.]+)/i],[[t,"Opera Mini"],s],[/\s(opr)\/([\w.]+)/i],[[t,"Opera"],s],[/(kindle)\/([\w.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w.]*)/i,/(?:ms|\()(ie)\s([\w.]+)/i,/(rekonq)\/([\w.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w.-]+)/i],[t,s],[/(trident).+rv[:\s]([\w.]+).+like\sgecko/i],[[t,"IE"],s],[/(edge)\/((\d+)?[\w.]+)/i],[t,s],[/(yabrowser)\/([\w.]+)/i],[[t,"Yandex"],s],[/(puffin)\/([\w.]+)/i],[[t,"Puffin"],s],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w.]+)/i],[[t,"UCBrowser"],s],[/(comodo_dragon)\/([\w.]+)/i],[[t,/_/g," "],s],[/(micromessenger)\/([\w.]+)/i],[[t,"WeChat"],s],[/(QQ)\/([\d.]+)/i],[t,s],[/m?(qqbrowser)[\/\s]?([\w.]+)/i],[t,s],[/xiaomi\/miuibrowser\/([\w.]+)/i],[s,[t,"MIUI Browser"]],[/;fbav\/([\w.]+);/i],[s,[t,"Facebook"]],[/headlesschrome(?:\/([\w.]+)|\s)/i],[s,[t,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w.]+)/i],[[t,/(.+)/,"$1 WebView"],s],[/((?:oculus|samsung)browser)\/([\w.]+)/i],[[t,/(.+(?:g|us))(.+)/,"$1 $2"],s],[/android.+version\/([\w.]+)\s+(?:mobile\s?safari|safari)*/i],[s,[t,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w.]+)/i],[t,s],[/(dolfin)\/([\w.]+)/i],[[t,"Dolphin"],s],[/((?:android.+)crmo|crios)\/([\w.]+)/i],[[t,"Chrome"],s],[/(coast)\/([\w.]+)/i],[[t,"Opera Coast"],s],[/fxios\/([\w.-]+)/i],[s,[t,"Firefox"]],[/version\/([\w.]+).+?mobile\/\w+\s(safari)/i],[s,[t,"Mobile Safari"]],[/version\/([\w.]+).+?(mobile\s?safari|safari)/i],[s,t],[/webkit.+?(gsa)\/([\w.]+).+?(mobile\s?safari|safari)(\/[\w.]+)/i],[[t,"GSA"],s],[/webkit.+?(mobile\s?safari|safari)(\/[\w.]+)/i],[t,[s,o,u.browser.oldSafari.version]],[/(konqueror)\/([\w.]+)/i,/(webkit|khtml)\/([\w.]+)/i],[t,s],[/(navigator|netscape)\/([\w.-]+)/i],[[t,"Netscape"],s],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w.+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w.-]+)/i,/(mozilla)\/([\w.]+).+rv:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w.]+)/i,/(links)\s\(([\w.]+)/i,/(gobrowser)\/?([\w.]+)*/i,/(ice\s?browser)\/v?([\w._]+)/i,/(mosaic)[\/\s]([\w.]+)/i],[t,s]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",n]],[/((?:i[346]|x)86)[;)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",n]],[/(sun4\w)[;)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",n]]],device:[[/\((ipad|playbook);[\w\s);-]+(rim|apple)/i],[l,a,[d,p]],[/applecoremedia\/[\w.]+ \((ipad)/],[l,[a,"Apple"],[d,p]],[/(apple\s{0,1}tv)/i],[[l,"Apple TV"],[a,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[a,l,[d,p]],[/(kf[A-z]+)\sbuild\/[\w.]+.*silk\//i],[l,[a,"Amazon"],[d,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w.]+.*silk\//i],[[l,o,u.device.amazon.model],[a,"Amazon"],[d,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[l,a,[d,c]],[/\((ip[honed|\s\w*]+);/i],[l,[a,"Apple"],[d,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[a,l,[d,c]],[/\(bb10;\s(\w+)/i],[l,[a,"BlackBerry"],[d,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[l,[a,"Asus"],[d,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[a,"Sony"],[l,"Xperia Tablet"],[d,p]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[l,[a,"Sony"],[d,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[a,l,[d,"CONSOLE"]],[/android.+;\s(shield)\sbuild/i],[l,[a,"Nvidia"],[d,"CONSOLE"]],[/(playstation\s[34portablevi]+)/i],[l,[a,"Sony"],[d,"CONSOLE"]],[/(sprint\s(\w+))/i],[[a,o,u.device.sprint.vendor],[l,o,u.device.sprint.model],[d,c]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[a,l,[d,p]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[a,[l,/_/g," "],[d,c]],[/(nexus\s9)/i],[l,[a,"HTC"],[d,p]],[/d\/huawei([\w\s-]+)[;)]/i,/(nexus\s6p)/i],[l,[a,"Huawei"],[d,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[a,l,[d,c]],[/[\s(;](xbox(?:\sone)?)[\s);]/i],[l,[a,"Microsoft"],[d,"CONSOLE"]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[a,"Microsoft"],[d,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[l,[a,"Motorola"],[d,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[l,[a,"Motorola"],[d,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[a,r],[l,r],[d,"SMART_TV"]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[a,"Samsung"],[d,"SMART_TV"]],[/\(dtv[);].+(aquos)/i],[l,[a,"Sharp"],[d,"SMART_TV"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[a,"Samsung"],l,[d,p]],[/smart-tv.+(samsung)/i],[a,[d,"SMART_TV"],l],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[a,"Samsung"],l,[d,c]],[/sie-(\w+)*/i],[l,[a,"Siemens"],[d,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[a,"Nokia"],l,[d,c]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[l,[a,"Acer"],[d,p]],[/android.+([vl]k-?\d{3})\s+build/i],[l,[a,"LG"],[d,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[a,"LG"],l,[d,p]],[/(lg) netcast\.tv/i],[a,l,[d,"SMART_TV"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(-?[\d\w]+)\s+build/i],[l,[a,"LG"],[d,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[l,[a,"Lenovo"],[d,p]],[/linux;.+((jolla));/i],[a,l,[d,c]],[/((pebble))app\/[\d.]+\s/i],[a,l,[d,"WEARABLE"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[a,l,[d,c]],[/crkey/i],[[l,"Chromecast"],[a,"Google"]],[/android.+;\s(glass)\s\d/i],[l,[a,"Google"],[d,"WEARABLE"]],[/android.+;\s(pixel c)\s/i],[l,[a,"Google"],[d,p]],[/android.+;\s(pixel xl|pixel)\s/i],[l,[a,"Google"],[d,c]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[l,/_/g," "],[a,"Xiaomi"],[d,c]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[l,/_/g," "],[a,"Xiaomi"],[d,p]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[l,[a,"Meizu"],[d,p]],[/android.+a000(1)\s+build/i],[l,[a,"OnePlus"],[d,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[l,[a,"RCA"],[d,p]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[l,[a,"Dell"],[d,p]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[l,[a,"Verizon"],[d,p]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[a,"Barnes & Noble"],l,[d,p]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[l,[a,"NuVision"],[d,p]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[a,"ZTE"],l,[d,p]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[l,[a,"Swiss"],[d,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[l,[a,"Swiss"],[d,p]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[l,[a,"Zeki"],[d,p]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[-\s]+Touch\s+|DT)(.+)\s+build/i],[[a,"Dragon Touch"],l,[d,p]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[l,[a,"Insignia"],[d,p]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[l,[a,"NextBook"],[d,p]],[/android.+[;\/]\s*(Xtreme_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[a,"Voice"],l,[d,c]],[/android.+[;\/]\s*(LVTEL-?)?(V1[12])\s+build/i],[[a,"LvTel"],l,[d,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[l,[a,"Envizen"],[d,p]],[/android.+[;\/]\s*(Le[\s-]+Pan)[\s-]+(.*\b)\s+build/i],[a,l,[d,p]],[/android.+[;\/]\s*(Trio[\s-]*.*)\s+build/i],[l,[a,"MachSpeed"],[d,p]],[/android.+[;\/]\s*(Trinity)[-\s]*(T\d{3})\s+build/i],[a,l,[d,p]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[l,[a,"Rotor"],[d,p]],[/android.+(KS(.+))\s+build/i],[l,[a,"Amazon"],[d,p]],[/android.+(Gigaset)[\s-]+(Q.+)\s+build/i],[a,l,[d,p]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,n],a,l],[/(android.+)[;\/].+build/i],[l,[a,"Generic"]]],engine:[[/windows.+\sedge\/([\w.]+)/i],[s,[t,"EdgeHTML"]],[/(presto)\/([\w.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w.]+)/i,/(icab)[\/\s]([23]\.[\d.]+)/i],[t,s],[/rv:([\w.]+).*(gecko)/i],[s,t]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[t,s],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d.\s]+\w)/i],[t,[s,o,u.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d.]+)/i],[[t,"Windows"],[s,o,u.os.windows.version]],[/\((bb)(10);/i],[[t,"BlackBerry"],s],[/(blackberry)\w*\/?([\w.]+)*/i,/(tizen)[\/\s]([\w.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w.]+)*/i,/linux;.+(sailfish);/i],[t,s],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w.]+)*/i],[[t,"Symbian"],s],[/\((series40);/i],[t],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[t,"Firefox OS"],s],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w.-]+)*/i,/(hurd|linux)\s?([\w.]+)*/i,/(gnu)\s?([\w.]+)*/i],[t,s],[/(cros)\s[\w]+\s([\w.]+\w)/i],[[t,"Chromium OS"],s],[/(sunos)\s?([\w.]+\d)*/i],[[t,"Solaris"],s],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w.]+)*/i],[t,s],[/(haiku)\s(\w+)/i],[t,s],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[s,/_/g,"."],[t,"iOS"]],[/(mac\sos\sx)\s?([\w\s.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[t,"Mac OS"],[s,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w.]+)*/i],[t,s]]},w=i(e,f.browser),h=i(e,f.engine),g=i(e,f.os),m=i(e,f.device);return{ua:e,browserName:w.name||null,browserVersion:w.version||null,engineName:h.name||null,engineVersion:h.version||null,osName:g.name||null,osVersion:g.version||null,deviceVendor:m.vendor||null,deviceModel:m.model||null,deviceType:m.type||null,cpu:i(e,f.cpu).architecture||null}},e.log=function(){for(var e="",i=0;i<arguments.length;i++){var o=arguments[i];o&&("object"==typeof o||Array.isArray(o))?(Array.isArray(o)?e+="Array("+o.length+"): \n":"object"==typeof o&&(e+="Object: \n"),e+=JSON.stringify(o,null,"    "),e+="\n"):e+=(i>0?" ":"")+o}console.log(e)},window.Cookie={get:function(e){var i=document.cookie,o=i.indexOf(e+"=");if(-1!==o&&!(o>0&&" "!==i[o-1])){var n=o+e.length+1,r=i.indexOf(";",n);return decodeURIComponent(i.slice(n,-1===r?void 0:r))}}},window.Cor||(window.Cor={}),window.Cor.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};var p,u=Object.prototype.toString,f=/^(GET|PUT|POST|DELETE)\s(\S+)$/;window.Cor||(window.Cor={}),window.Cor.xhr=function(e,i,o,n,r){var t,s,a,l,d,c;if(e=function(){var i=e.match(f);if(!i)throw new Error('Request must follow "<Method> <Url>" syntax.');return{method:i[1],url:i[2]}}(),i instanceof FormData&&"[object Object]"===u.call(o)&&"function"==typeof n&&"function"==typeof r)t=i,s=o,a=n,l=r;else if(i instanceof FormData&&"function"==typeof o&&"function"==typeof n)t=i,a=o,l=n;else if(i instanceof FormData&&"function"==typeof o)t=i,l=o;else if(d=i,("[object Object]"===u.call(d)||Array.isArray(d)||"string"==typeof d||d instanceof FormData)&&"[object Object]"===u.call(o)&&"function"==typeof n)t=i,s=o,l=n;else if("[object Object]"===u.call(i)&&"function"==typeof o)s=i,l=o;else{if("function"!=typeof i)throw new Error("Invalid arguments at tail.");l=i}if(s)for(c in s)s.hasOwnProperty(c)&&(s[c.toLowerCase()]=s[c]);if("[object Object]"===u.call(t)||Array.isArray(t)||"string"==typeof t){var p=s["content-type"];if(!p)throw new Error("Missing content type.");if("string"!=typeof t){if("application/json"!==p)throw new Error("Invalid content type.");t=JSON.stringify(t)}}var w,h=new XMLHttpRequest;if(h.onerror=function(){console.error("Unexpected XHR error."),l(new Error("xhr"))},a&&(h.upload.onprogress=function(e){if(e.lengthComputable){var i=e.loaded/e.total*100;a(i.toFixed(0))}}),h.onreadystatechange=function(){if(4===h.readyState){w=function(e){try{return JSON.parse(e)}catch(i){return e}}(h.responseText||"");var e=h.status;if(200!==e)return l(new Error(""+e),w);l(null,w)}},h.open(e.method,e.url,!0),s)for(c in s)s.hasOwnProperty(c)&&h.setRequestHeader(c,s[c]);h.send(t)},CustomEvent.create=function(e,i){var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!0,!0,i),o},Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector),p=Element.prototype.removeChild,Element.prototype.removeChild=function(e){return e.previousElementSibling instanceof HTMLStyleElement&&p.call(this,e.previousElementSibling),p.call(this,e)},function(){for(var e,i=document.querySelectorAll("[state]"),o=i.length;o--;){e=i[o];try{e.state=JSON.parse(e.getAttribute("state"))}catch(i){e.state={}}}}(),HTMLCollection.from=function(e){var i=document.implementation.createHTMLDocument(),o=i.createElement("base");return o.href=document.location.href,i.head.appendChild(o),i.body.innerHTML=e,i.body.children},window.HTMLCollection&&(HTMLCollection.prototype.forEach=Array.prototype.forEach)}();