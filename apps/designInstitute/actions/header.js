
var {ACTION_TOGGLE_MENU} = require('./ActionTypes');

export function toggleMenuAction(isShow) {
    return {
        type: ACTION_TOGGLE_MENU,
        isShow: isShow
    };
}
