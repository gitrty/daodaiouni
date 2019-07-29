const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'production',
    output:{
        path:path.resolve(__dirname,'../bundle/'),
        filename:'main.min.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        }),
        new VueLoaderPlugin()
    ]
}