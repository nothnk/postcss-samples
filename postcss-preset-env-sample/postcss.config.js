const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssInject = require('postcss-inject');
const postcssExtendRule = require('postcss-extend-rule');
const path =  require('path');

module.exports = {
  plugins: [
      postcssImport,
      postcssInject({
        injectTo: 'fileStart',
        cssFilePath: path.join(__dirname, './src/variables.css'),
      }),
      postcssExtendRule({ onFunctionalSelector: 'remove' }),
      postcssPresetEnv({
        stage: 2,
        features: {
            'nesting-rules': true,
            'hexadecimal-alpha-notation': true,
        },
      })
  ]
};