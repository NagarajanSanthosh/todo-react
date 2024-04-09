// webpack.config.js

module.exports = {
    resolve: {
      fallback: {
        zlib: require.resolve('browserify-zlib'),
        crypto: require.resolve('crypto-browserify'),
        fs: false, // or require.resolve('fs') if needed
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),
        url: require.resolve('url/'),
        buffer: require.resolve('buffer/'),
      },
    },
  };
  