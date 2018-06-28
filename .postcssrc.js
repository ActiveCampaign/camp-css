const autoprefixer = require('autoprefixer')

module.exports = {
  parser: 'postcss-syntax',
  plugins: [
    autoprefixer(),
  ],
}
