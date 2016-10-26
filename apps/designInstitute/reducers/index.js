
var { combineReducers } = require('redux');
var { routeReducer }  = require('redux-simple-router');
var app = require('./app');
var header = require('./header');
var leftmenu = require('./leftmenu');
var refinfo = require('yylib-ui/refer/reducers/refinfo');
var bpm = require('yylib-business/bpmapprove/bpm/reducers/bpm');
var hntCompactReducer = require('../demo/hntCompact/reducers/hntCompactReducer');
/**
 * 将所有State组织成一个状态树来进行维护
 */
export default combineReducers({
    routing: routeReducer,
    app,
    header,
    leftmenu,
    refinfo,
    bpm,
    hntCompactReducer,
});