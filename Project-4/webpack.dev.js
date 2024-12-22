module: {
    rules: [
        {
            test: /\.js$/, // Process JavaScript files
            exclude: /node_modules/, // Exclude files in the node_modules directory
            use: {
                loader: "babel-loader", // Use Babel loader for transpilation
                options: {
                    presets: ['@babel/preset-env'], // Enable modern JavaScript support
                    plugins: ['react-refresh/babel'] // Enable React Fast Refresh (if using React)
                }
            }
        },
        // Additional rules can be added here
    ]
}
