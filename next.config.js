const withTypescript = require('@zeit/next-typescript')
const withImages = require('next-images')
const { compose } = require('ramda')

module.exports = () => {
  const config = {}

  return compose(
    withTypescript,
    withImages
  )(config)
}
