const precss = require('precss');
const postCSSAdvancedVariables = require('postcss-advanced-variables');
const path = require('path');


module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    precss({
      importPaths: [path.join(__dirname, './src/variables.css')]
    }),
  ]
};
