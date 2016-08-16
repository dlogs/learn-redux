var path = require('path');

module.exports = {
    output: {
        filename: 'examples.js'
    },
    module: {
        loaders: [{
                test: /\.jsx$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    "presets": ["es2015", "stage-0", "react"]
                }
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
