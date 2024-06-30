const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['webpack/hot/poll?1000', './src/main.ts'],
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: ['webpack/hot/poll?1000']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin({
            paths: [/node_modules/],
        }),
        new RunScriptWebpackPlugin({ name: 'main.js', autoRestart: false }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
};