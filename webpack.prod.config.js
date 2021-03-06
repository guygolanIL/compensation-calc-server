const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OUTPUT_FOLDER = 'dist';

const config = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/public', to: 'public'}
        ])
    ],
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, OUTPUT_FOLDER),
    },
};

module.exports = config;
