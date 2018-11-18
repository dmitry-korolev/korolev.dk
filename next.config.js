const withTypescript = require('@zeit/next-typescript')

module.exports = () => {
  const config = {}

  return withTypescript(config)
}
