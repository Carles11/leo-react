// config-overrides.js
module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      vm: require.resolve('vm-browserify'),
    };
    return config;
  },
};
