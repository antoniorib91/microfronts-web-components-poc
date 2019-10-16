module.exports = {
    entry: './app.js',
    output: {
      filename: 'app.react.js',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: [
                    "@babel/env",
                    "@babel/preset-react",
                ]
              }
            }
        ]
    }
}
    

// @babel/preset-react

// rules: [{
//     test: /\.js$/,
//     exclude: /node_modules/,
//     loader: 'babel',
//     query: {
//         presets: ['react', 'es2015']
//     }
// }]