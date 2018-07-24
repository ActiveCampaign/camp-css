module.exports = ctx => ({
  map: ctx.options.map,
  parser: 'postcss-syntax',
  plugins: {
    autoprefixer: {
      browsers: [
        'last 2 versions',
        'ie >= 10',
      ],
      flexbox: true,
    },
    cssnano: ctx.env === 'production'
      ? { preset: 'default' }
      : false
  }
})
