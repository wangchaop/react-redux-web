/**
 * reducer函数，用于变更状态容器中的状态
 * 如果action未知，则原样返回
 * 永远不要修改state，返回一个全新的state
 * @param state 当前状态
 * @param action 接收到的新指令
 */
function receiveActions(state = {}, action = {type}) {
    return state;
}
module.exports = receiveActions;