const path = require('path');

module.exports = {
    entry: {
      app: './src/ts/lilly.ts'
    },
    devtool: 'inline-source-map',
    plugins: [ ],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };