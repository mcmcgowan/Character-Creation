
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src/client')

module.exports = {
    entry: './src/client/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    }, 
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: "/"
        },
        headers: {'Access-Control-Allow-Origin': "*"},
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    },
    module: {
        rules: [
            { 
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }          
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    }
}