var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var {Router} = require('react-router');
require('antd/dist/antd.css');
require('./index.css');
var {Icon,Spin} = require('antd');
var AuthToken = require('yylib-utils/AuthToken');
var {WORKBENCHHOST} = require('./../pub/constants/BaseHost');

//将状态写入属性
var mapStateToProps = function (state) {
    return {
        isShow: state.header.isShow
    }
};
//规范属性类型
var propTypes = {
    dispatch: React.PropTypes.func,
    isShow: React.PropTypes.boolean
};

var App = React.createClass({
    getInitialState() {
        return {
            loading : true,
            timeout : 500,
            istimeout: false,
        };
    },
    getDefaultProps: function () {
        return {isShow: false}
    }
    , componentDidMount: function () {
        console.log('do ---->componentDidMount');
        ////初始化director配置路由
        this.context.history = this.props.history;

        var that = this;
        AuthToken.init({
            url:WORKBENCHHOST + "getWorkbenchCookie",
            success: function(){
                console.log('获取上下文成功', AuthToken.getContext());
                that.setState({loading : false}); 
            },
            error: function(){
                //console.log('获取上下文失败');
                //that.setState({istimeout : true});  
            }
        });
    }
    , render: function () {
        return (
            <div>
                <Spin spinning={this.state.loading} tip={<span style={{fontSize:22}}>
                {this.state.istimeout?"登录超时，请确认已正常登录工作台":""}</span>}>
                    <div style={{"min-height":600,"min-width":1200}} className="cp-container">
                        {!this.state.loading?(
                            this.props.children
                        ):null}
                    </div>
                </Spin>
            </div>
        );
    }
});
App.propTypes = propTypes;
module.exports = connect(mapStateToProps)(App);