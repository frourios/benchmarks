const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: './frourio/index.ts',
  output: {
    filename: 'benchmarks/frourio.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: [nodeExternals()]
}
