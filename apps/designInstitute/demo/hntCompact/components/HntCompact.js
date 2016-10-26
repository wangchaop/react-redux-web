var React = require('react');
var {Affix,Button} = require('antd');
import {connect} from 'react-redux';
import {changeState} from '../action/hntCompactAction.js';

var propTypes = {
    //定义hntCompactObject对象，防止取值时候取得为null或未定义
    hntCompactObject: React.PropTypes.object,
    dispatch: React.PropTypes.func
};
var mapStateToProps = function (state) {
    console.log('mapStateToProps===============>',state);
    return {
        //reducer返回的值存放在hntCompactObject中
        hntCompactObject: state.hntCompactReducer,
    }
};
var HntCompact = React.createClass({
     getInitialState() {
        return {
        };
    },

     componentWillMount: function () {

     },
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps============>',nextProps.hntCompactObject);
    },
    testClick:function(){
        console.log('testClick=========>进入点击事件');
        const {dispatch} = this.props;
        dispatch(changeState({loadingDisplay: true}));
    },
    render: function () {
        var that = this;
        return (
            <div>
                <div onClick={that.testClick}>
                    点击我，走一遍reducer流程
                </div>
            </div>
        );
    }
});

HntCompact.propTypes = propTypes;
module.exports = connect(mapStateToProps)(HntCompact);