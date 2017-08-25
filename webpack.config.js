const path = require('path')
const SRC  = path.join(__dirname, 'src')
const DIST = path.join(__dirname, 'dist')

config = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: DIST,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader'],
        include: SRC
      }
    ]
  }
};

module.exports = config
