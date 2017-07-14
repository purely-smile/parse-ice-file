let nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './index.ts'
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ]
  },
  output: {
    filename: '[name].js',
    path: '/home/yoyo/demo/parse-ice-file/public/',
    libraryTarget:"commonjs2"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.ts/,
        use: 'ts-loader',
        exclude:["./parser-files.ts"]
      }
    ]
  },
  node:{
    __dirname:true,
    __filename:true
  }
};