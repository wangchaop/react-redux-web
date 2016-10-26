var config = require('./config');
//打印启动信息
config.initPrint(__filename);
var path = require('path');
var cwd = process.cwd();//返回运行当前脚本的工作目录的路径
var options = {
    //定义应用标识名
    key: 'designInstitute',
    //定义各模块的入口
    modules: {
        designInstitute: './index-designInstitute.js'
    }
    //服务端地址
    //,local:'localhost'
    //webpack-dev-server启动的端口
    , port: 8010
    //相对路径
    //,path: path.join(__dirname, 'apps')icop-office-web/apps/
    //服务端产出路径
    //,publicPath: 'http://123.103.9.206:7023/icop-office-web/apps/designInstitute'
    //编译后的路径
    //,filename: '[name]/build/bundle.js'
    //定义各种加载器
    //,loaders: []
    //定义各种插件
    //,plugins:[]
    //定义路径别名，即:require(alias)
    //, alias: {}
}
//构建webpack配置
module.exports = config.webpack(options);