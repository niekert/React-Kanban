const path = require('path');
const merge = require('webpack-merge');
var stylelint = require('stylelint');
const webpack = require('webpack');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }
        ],
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint', 'jscs'],
                include: PATHS.app
            },
            {
                test: /.css?$/,
                loaders: ['postcss'],
                include: PATHS.app
            },
        ]
    },
    postcss: function() {
        return [stylelint({
            rules: {
                'color-hex-case': 'lower'
            }
        })];
    }
}

var config = null;
if (TARGET === 'start' || !TARGET) {
    config = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            //Only display errors
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true // --save
            })
        ]
    });
}

if (TARGET === 'build') {
    config = merge(common, {});
}

module.exports = config;
