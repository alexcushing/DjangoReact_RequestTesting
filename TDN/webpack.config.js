var path = require('path');
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/static",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css/,
                loaders: [ 'style', 'css', 'sass' ]
              }
        ],
    }
};
