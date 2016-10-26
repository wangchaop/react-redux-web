/**
 * 打包全部应用
 */
//var path = require('path');
//var config = require('./config');
//打印启动信息
//config.initPrint(__filename,function(){
  console.log('------------------------运行说明----------------------------');
  console.log('【提示】各自模块使用对应命令启动：$npm run dev-xxx (xxx替换为对应应用名称)');
  //console.log('【提示】启动运行 $npm run dev (全部应用)');
  console.log('【提示】启动运行 $npm run dev-portal (门户)');
  console.log('【提示】启动运行 $npm run dev-compact (合约云)');
  console.log('【提示】启动运行 $npm run dev-device (设备现场)');
  console.log('【提示】启动运行 $npm run dev-demos (案例示例)');
  console.log('【提示】启动运行 $npm run dev-compactCloud (业务组示例)');
  console.log('【提示】启动运行 $npm run dev-provider (供应商)');
  console.log('【提示】启动运行 $npm run dev-finm (资金计划)');
  console.log('【提示】启动运行 $npm run dev-deviceNew (新设备现场)');
  console.log('------------------------------------------------------------');
//});
//var options = {
    //定义各模块的入口
    //modules : {
    //  demos: './index-demos.js'//案例入口
    //  ,compact: './index-compact.js'//合同入口
    //  ,device: './index-device.js'//设备入口
    //}
    //服务端地址
    //,local:'localhost'
    //webpack-dev-server启动的端口
    //,port:8080
    //相对路径
    //,path: path.join(__dirname, 'apps')
    //服务端产出路径
    //,publicPath: 'http://localhost:8080/apps/'
    //编译后的路径
    //,filename: '[name]/build/bundle.js'
    //定义各种加载器
    //,loaders: []
    //定义各种插件
    //,plugins:[]
    //定义路径别名，即:require(alias)
    //,alias:{}
//}
//构建webpack配置
//module.exports = config.webpack(options);