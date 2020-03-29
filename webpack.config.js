const path = require('path')
const SRC = path.join(__dirname, 'src')
const DIST = path.join(__dirname, 'lib')

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: DIST,
    filename: 'index.js',
    library: 'web-extensions',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader'],
        include: SRC
      }
    ]
  },
  externals: {
    // Use more complicated mapping for lodash.
    // We need to access it differently depending
    // on the environment.
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
}

module.exports = config
