
module.exports = function (env, argv) {
    env = env || env.development;
    return {
        entry: "./main.js",
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/i, use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|svg|ttf|eot)$/i, use: {
                        loader: 'url-loader',
                        options: {
                            outputPath: '/img',
                            // limit:4*1024
                        }
                    }
                },
                {
                    test: /.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(js|jsx$)/i, use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                ["import", {
                                    "libraryName": "elementui",
                                    "libraryDirectory": "es",
                                    "style": true
                                }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(html|htm)$/i, use: 'html-withimg-loader'
                }
            ]
        },
        // devServer: {
        //     historyApiFallback: { index: './index.html' }
        // },
        // devtool: 'source-map',
        ...env.production ? require("./config/webpack.production") : require('./config/webpack.development')
    }
}