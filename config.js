var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var cwd = process.cwd();
/**
 * Created by Dio on 2016/6/8.
 * 运行配置的公共方法
 */
module.exports={
    //初始化运行时打印
    initPrint:function(filename,printMsg){
        console.log('------------启动运行：'+(process.env.NODE_ENV==='prod'?'发布态':'开发态')+'------------');
        console.log(path.basename(filename));
        if((typeof printMsg)=='function'){
            printMsg.call();
        }
        console.log('----------------------------------------');
    },
    //默认插件集合
    getDefaultPlugins:function(key){
        var plugins = [];
        plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV':'"production"'}));
        plugins.push(new ExtractTextPlugin("/build/styles.css"));
        //提取公用模块代码，避免重复打包
        plugins.push( new webpack.optimize.CommonsChunkPlugin('common', '/build/common.js'));

        return plugins;
    }
    //默认加载器集合
    ,getDefaultLoaders:function(){
        var loaders = [
            // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
            {test: /\.js?$/,exclude:/node_modules/,loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            {test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader","css-loader")}, //"style-loader!css-loader"
            {test: /\.json$/,loader:'json-loader'},
            // {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {test: /\.(png|jpg|gif)$/,loader: 'file-loader?name=/build/[name].[ext]'},
            {test: /\.(ttf\??|eot\??|svg\??|woff\??|woff2\??)/, loader: "file-loader?name=/build/[name].[ext]?[hash]"}
        ]
        return loaders;
    }
    //默认别名集合
    ,getDefaultAlias:function(alias){
        var _defaultAlias = Object.assign({
            "yylib": path.join(cwd,"./core/yylib")//旧UI库
            ,"yylib-ui": 'yylib-react/dist/yylib2'//新UI库
            ,"yylib-utils": 'yylib-react/dist/utils'//工具库
            ,"yylib-business": 'yylib-react/dist/business'//业务组件库
            ,"yylib-trd": 'yylib-react/trd'//第三方库组件库
        },alias||{});
        return _defaultAlias;
    }
    //构建webpack配置信息
    ,webpack:function(options) {
        var key = options.key||'';
        var port = options.port||8080;
        var entry = options.modules||{};
        entry.common=['babel-polyfill','yylib-trd/media-match/media.match.min','react',
            'react-dom','antd','react-redux','react-router','lodash'];

        return {
            devServer: {//inline：内联模式，该模式下修改代码后，webpack将自动打包并且刷新浏览器，让我们看到最终的修改
                port: port
                //,contentBase:''
            },
            entry: entry,
            output: {
                path: options.path||path.join(__dirname, 'apps/'+key)//编译后的输出路径
                , filename: options.filename||'/build/bundle.js'
                , publicPath: options.publicPath||'/apps/'+key//服务端的路径
                , chunkFilename: "/build/[name]_[hash].chunk.js"
            },
            module: {
                loaders: options.loaders||this.getDefaultLoaders()
            },
            resolve: {
                extension: options.extension||['', '.js', '.jsx', '.json']
                ,alias: this.getDefaultAlias(options.alias)
            },
            plugins: options.plugins||this.getDefaultPlugins(key)
            ,externals: {
                'AMap': 'window.AMap',
            }
        }
    }
}
