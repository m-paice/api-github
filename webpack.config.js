const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: '/dist',
        hot: true,
        port: 3000,
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                    },
                },
            },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
            },
        ],
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    target: 'web',
};
