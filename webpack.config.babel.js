import CopyPlugin from 'copy-webpack-plugin';
import minify from 'babel-minify';

const config = {
    entry: './src/index.js',
    mode: 'production',
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
};

module.exports = [{
    ...config,
    optimization: { minimize: false },
    output: {
        filename: 'rtconnect.umd.js',
        library: 'rutoken-connect',
        libraryTarget: 'umd',
    },
    plugins: [
        new CopyPlugin([{ from: 'src/index.js', to: 'rtconnect.es.js' }]),
    ],
}, {
    ...config,
    optimization: { minimize: true },
    output: {
        filename: 'rtconnect.umd.min.js',
        library: 'rutoken-connect',
        libraryTarget: 'umd',
    },
    plugins: [
        new CopyPlugin([{
            from: 'src/index.js',
            to: 'rtconnect.es.min.js',
            transform(content) {
                return minify(content, {}, { sourceType: 'module' }).code;
            },
        }]),
    ],
}];
