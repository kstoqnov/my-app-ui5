module.exports = function override(config, env) {
    config.module.rules.push({
      test: /assets\/.*\.json$/,
      use: 'file-loader',
      type: 'javascript/auto'
    });
    return config;
};