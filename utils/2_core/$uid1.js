import $global from '../global';

export default function $uid1() {
    return ['' + new Date().getFullYear(), ('' + (new Date().getMonth() + 1)).padStart(2, '0'), ('' + (new Date().getDate())).padStart(2, '0'), ('' + (new Date().getHours())).padStart(2, '0'), ('' + (new Date().getMinutes())).padStart(2, '0'), Math.random().toString(36).slice(2, 8)].join('-');
}
$global.$uid1 = $uid1;