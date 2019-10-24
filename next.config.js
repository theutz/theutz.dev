const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }]],
  {
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      }

      return config
    },
  }
)
