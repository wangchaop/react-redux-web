var React = require('react');
var {Route, IndexRoute, Redirect} = require('react-router');
var App = require('../pages/App');//主应用
var IndexPage = require('../pages/IndexPage');//主菜单
var PageRoutes = require('./PageRoutes');//页面路由
var HntCompact = require('../demo/hntCompact/components/HntCompact');
//参考示例

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage}/>
        {/*demo路由 start*/}
        <Route path="HntCompact" component={PageRoutes}>
            <IndexRoute component={HntCompact}/>
        </Route>
    </Route>
);