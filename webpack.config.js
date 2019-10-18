const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        hot: true,
        port: 3000
    },
    entry: './src/app.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './build'),
        // publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|woff|eot|svg|ttf|png|jsp|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[path][name].[ext]',
                        publicPath: 'public/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称
        })
    ]
};