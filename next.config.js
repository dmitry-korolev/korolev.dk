const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const { compose } = require('ramda')

module.exports = () => {
  const config = {
    exportPathMap: async function(defaultPathMap) {
      return {
        ...defaultPathMap,
        '/': { page: '/' }
      }
    }
  }

  return compose(
    withCSS,
    withTypescript,
    withImages
  )(config)
}
