const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                use: 'eslint-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('dist'),
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWepackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
}