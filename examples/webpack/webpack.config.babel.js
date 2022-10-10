import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export default () => ({
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
    },
    devtool: 'source-map',
    plugins: [
        new ESLintPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/index.html', to: 'index.html' },
            ],
        }),
    ],
});
