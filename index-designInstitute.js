var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Router } = require('react-router');
var { createHistory, createHashHistory, useBasename } = require('history');
var { syncReduxAndRouter } = require('redux-simple-router');
//获取应用组件
var App = require('./apps/designInstitute/pages/App');
//获取路由信息
var routes = require('./apps/designInstitute/routes');
//初始化store
var configureStore = require('./apps/designInstitute/reducers/configureStore');
//创建store
var store = configureStore();
//URL路径
var {ROOT_PATH, APP_PATH} = require('./apps/designInstitute/routes/RestUrl');
//配置路由Base路径 createHistory
var history = useBasename(createHashHistory)({
    // basename: ROOT_PATH+APP_PATH //同后端集成测试时启用
    basename: APP_PATH //前段独立开发时启用
});
//同步路由与Redux的状态
syncReduxAndRouter(history, store);
//渲染入口
ReactDOM.render(<Provider store={store}><Router
    history={history}>{routes}</Router></Provider>, document.getElementById('app_root'));
