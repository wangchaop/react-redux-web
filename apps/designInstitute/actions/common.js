
var {ACTION_LIST_CHECKBOX_MODE,ACTION_LIST_CHECK_ALL} = require('./ActionTypes');

//勾选模式启用|禁用的命令
export function toggleCheckboxAction(checkMode) {
    return {
        type: ACTION_LIST_CHECKBOX_MODE,
        checkMode: checkMode//boolean 勾选模式是否开启
    };
}
//全选|反选
export function toggleCheckAllAction(checkAll = false) {
    return {
        type: ACTION_LIST_CHECK_ALL,
        checkAll: checkAll//boolean
    };
}

