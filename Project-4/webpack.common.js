const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/js/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Rule for .scss files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders for SCSS
      },
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the 'dist' folder before each build
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for the HTML file
    }),
  ],
};
