const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withMdx = require('@next/mdx')

module.exports = withPlugins(
  [
    [optimizedImages, { optimizeImagesInDev: true }],
    [
      withMdx({ extension: /\.mdx$/ }),
      { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'] },
    ],
  ],
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
