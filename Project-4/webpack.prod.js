const { merge } = require('webpack-merge'); // Import merge function
const common = require('./webpack.common.js'); // Import the common configuration
const TerserPlugin = require('terser-webpack-plugin'); // Import Terser for JS minification
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // Import CSS minifier

module.exports = merge(common, {
  mode: 'production', // Set production mode
  optimization: {
    minimizer: [
      new TerserPlugin(), // Optimize and minimize JavaScript
      new CssMinimizerPlugin(), // Optimize and minimize CSS
    ],
  },
});
