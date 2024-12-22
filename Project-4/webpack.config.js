const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // Entry point for your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file
  },
  mode: "development", // Set mode to 'development' or 'production'
  module: {
    rules: [
      {
        test: /\.scss$/, // Match .scss files
        use: ["style-loader", "css-loader", "sass-loader"], // Loaders for processing SCSS
      },
      {
        test: /\.js$/, // Match .js files
        exclude: /node_modules/, // Exclude files in node_modules
        use: ["babel-loader"], // Use Babel loader for ES6+ compatibility
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template file for HTML generation
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true, // Ensure control of all clients
      skipWaiting: true, // Skip the waiting phase
    }),
  ],
  devServer: {
    static: "./dist", // Directory for serving static files
    port: 3000, // Port for the development server
  },
  optimization: {
    minimize: true, // Enable optimization
    minimizer: [
      "...", // Preserve default minimizers (terser-webpack-plugin for JS)
      new CssMinimizerPlugin(), // Add CSS minimization
    ],
  },
};
