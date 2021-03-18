const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    // Aca pongo donde esta mi archivo principal del frontend
    entry: "./frontend/app.js", 
    // Aca es donde voy a poner mi codigo convertido
    output: {
        path: path.join(__dirname, "backend/public"),
        filename: "js/bundle.js"
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader, //Si estoy en desarrollo carga los estilos dentro del javascript, si estoy en produccion carga los estilos en su propio archivo de css/convierte a sus propios archivos de css
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./frontend/index.html",
            // Para minimizar el codigo html
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ],

    devtool: "source-map"
};