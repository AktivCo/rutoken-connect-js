import CopyPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    optimization: { minimize: false },
    output: {
        filename: 'rtconnect.umd.js',
        libraryTarget: 'umd',
    },
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
        new CopyPlugin([
            { from: 'src/index.js', to: 'rtconnect.es.js' },
        ]),
    ],
};
