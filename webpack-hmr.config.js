var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            './src/js/rhl'
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'rhl.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                query: {
                    "presets": ["react"],
                    "plugins": ["react-hot-loader/babel", "transform-es2015-modules-commonjs"]
                }
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
