import CopyPlugin from 'copy-webpack-plugin';

export default () => ({
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: [[
                    '@babel/preset-env',
                    {
                        targets: {
                            firefox: '60',
                            chrome: '49',
                        },
                    },
                ]],
            },
        }, {
            test: /\.js$/,
            loader: 'eslint-loader',
        }],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/index.html', to: 'index.html' },
            ],
        }),
    ],
});
