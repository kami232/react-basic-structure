const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true,
        inline: true
    },
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './build'),
        // publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,  // 可以打包后缀为sass/scss/css的文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: devMode, // 仅dev环境启用HMR功能
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]'
                            }
                        }
                    },
                    'sass-loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules')
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
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),//模板路径
            filename: 'index.html'//自动生成的HTML文件的名称
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
        })
    ]
};