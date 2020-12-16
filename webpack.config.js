const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssep = new MiniCSSExtractPlugin(
    {
        filename : 'styles.css'
    }
);
//const htmlplug = new HtmlWebpackPlugin();

module.exports = {
    entry: [
        './src/frontend/app.ts',
        './src/frontend/styles/styles.sass'
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.sass', '.css' ,'.html'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        cssep,
        //htmlplug 
    ],
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    {
                        loader : MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    // {
                    //     loader :'style-loader'
                    // },
                    {
                        loader :'sass-loader'
                    }
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.html/,
            //     use: ['html-loader']
            // }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    }
}