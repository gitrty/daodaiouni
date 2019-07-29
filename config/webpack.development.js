const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:"development",
    output:{
        filename:"main.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../index.html')
        }),
        new VueLoaderPlugin()
    ]
}