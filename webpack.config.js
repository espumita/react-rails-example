const webpack = require('webpack');

module.exports = {
    entry: "./app/assets/frontend/App.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.jsx$/, //? = .js and .jsx
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                {
                    presets:['react', 'latest']
                }
            }        
        ]
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ]
}