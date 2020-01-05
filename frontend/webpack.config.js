const path = require('path');
const env = process.env.NODE_ENV;

const config = {
    mode: env || 'development',
    target: 'node',
    entry: {
        index: [path.resolve(__dirname, 'src/index.js')],
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        publicPath: './public/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader!awesome-typescript-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
};

module.exports = config;
