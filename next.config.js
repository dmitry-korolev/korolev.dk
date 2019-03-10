const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const { compose } = require('ramda')

module.exports = () => {
  const config = {}

  return compose(
    withCSS,
    withTypescript,
    withImages
  )(config)
}
