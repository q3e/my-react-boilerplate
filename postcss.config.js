const tailwindcss = require('tailwindcss')

module.exports = {
  purge: [],

  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    tailwindcss('./tailwind.js'),
  ],
}
