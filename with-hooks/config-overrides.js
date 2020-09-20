const path = require('path');

module.exports = function override(config) {
  /* eslint no-param-reassign: 0 */
  config.resolve = {
    ...config.resolve,
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  };

  return config;
};
