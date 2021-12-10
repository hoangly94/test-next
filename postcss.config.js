const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')
const postCSSNested = require('postcss-nested')
const postCssCssVariables = require('postcss-css-variables')()
const postCSSInlineSVG = require('postcss-inline-svg')()
const cssnano = require('cssnano')

const postCSSAutoprefixer = autoprefixer()
const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

const colorFunction = require('postcss-color-function')
const postcssCssNext = require('postcss-cssnext')

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'autoprefixer': {},
    'postcss-import': {
      addDependencyTo: webpack,
    },
    'postcss-nested': {},
    'cssnano': {},
    'postcss-color-function': {},
  },
}