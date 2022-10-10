import CopyPlugin from 'copy-webpack-plugin';
import minify from 'babel-minify';
import ESLintPlugin from 'eslint-webpack-plugin';

module.exports = [{
    optimization: { minimize: false },
    mode: 'development',
    output: {
        filename: 'rtconnect.umd.js',
        library: 'rutoken-connect',
        libraryTarget: 'umd',
    },
    plugins: [
        new ESLintPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/index.js', to: 'rtconnect.es.js' },
            ],
        }),
    ],
}, {
    optimization: { minimize: true },
    mode: 'production',
    output: {
        filename: 'rtconnect.umd.min.js',
        library: 'rutoken-connect',
        libraryTarget: 'umd',
    },
    plugins: [
        new ESLintPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/index.js',
                    to: 'rtconnect.es.min.js',
                    transform(content) {
                        return minify(content, {}, { sourceType: 'module' }).code;
                    },
                },
            ],
        }),
    ],
}];
