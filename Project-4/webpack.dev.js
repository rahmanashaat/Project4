module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['react-refresh/babel'] 
                }
            }
        },
        // ... other rules
    ]
}