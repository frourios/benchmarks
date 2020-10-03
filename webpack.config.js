const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: {
    frourio: './frourio/index.ts',
    'frourio-fastify': './frourio-fastify/index.ts'
  },
  output: {
    filename: 'benchmarks/[name].js',
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
