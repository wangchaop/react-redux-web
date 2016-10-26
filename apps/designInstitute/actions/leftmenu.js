
var {ACTION_OPEN_PAGE} = require('./ActionTypes');

export function openPageAction(currPage) {
    return {
        type: ACTION_OPEN_PAGE,
        currPage: currPage
    };
}
