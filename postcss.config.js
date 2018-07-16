module.exports = {
  parser: 'postcss-syntax',
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 2 versions',
        'ie >= 10',
      ],
      flexbox: true,
    })
  ]
}
