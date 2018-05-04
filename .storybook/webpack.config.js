const path = require('path');
const fs = require('fs');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

// Load package.json
const pkgPath = path.join(__dirname, '../', 'package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  // add less support
  config.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: "less-loader",
      }
    ]
  });

  config.resolve.extensions.push('.less')

  return config;
};
