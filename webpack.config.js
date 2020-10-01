const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: './frourio/packages/frourio/servers/frourio.ts',
  output: {
    filename: 'benchmarks/frourio.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: {
            module: 'esnext',
            target: 'es2018'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: [nodeExternals()]
}
