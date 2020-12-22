const precss = require('precss');
const path = require('path');


module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    precss({
      importPaths: [path.join(__dirname, './src/variables.css')]
    }),
  ]
};
