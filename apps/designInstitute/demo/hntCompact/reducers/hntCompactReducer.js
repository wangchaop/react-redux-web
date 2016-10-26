/**
 * Created by yxl on 2016/4/10.
 */
import {HNT_COMPACT_ACTION_TEST} from '../../../actions/ActionTypes.js';
var assign = require('lodash/assign');
/**
 * reducer函数，用于变更状态容器中的状态
 * 如果action未知，则原样返回
 * 永远不要修改state，返回一个全新的state
 * @param state 当前状态
 * @param action 接收到的新指令
 */
function receiveActions(state, action = {type}) {
    console.log('reducer============>',action,state);
    switch (action.type) {
        case 'abc':
            return assign({}, action.data, {'test':'aaa'});
        default:
            return assign({}, action.data);
    }
    return assign({}, state);
}
module.exports = receiveActions;