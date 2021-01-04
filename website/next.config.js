const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Next Config
// export default {
module.exports = withPlugins([withBundleAnalyzer], {
  // Sass Config
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Webpack Config
  webpack: (
    config,
    {
      // buildId,
      // dev,
      // isServer,
      // defaultLoaders,
      webpack,
    }
  ) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // Important: return the modified config
    return config;
  },
});
