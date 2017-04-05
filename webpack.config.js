let WebpackNotifierPlugin = require("webpack-notifier"),
    nodeExternals = require("webpack-node-externals"),
    stylishFormatter = require("eslint/lib/formatters/stylish"),
    path = require("path");

let es6ModuleConfig = {
    preLoaders: [
        {
            test: /\.(js|node|json)$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }
    ],
    loaders: [
        {
            test: /\.(js|node)$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015"]
            }
        },
        {
            test: /\.json$/,
            exclude: /node_modules/,
            loader: "json"
        }
    ]
};

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    module: es6ModuleConfig,
    resolve: {
        root: [
            path.resolve(".")
        ]
    },
    eslint: {
        configFile: ".eslintrc.json",
        formatter: stylishFormatter,
        fix: true
    },
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        path: [__dirname, "bin"].join("/"),
        filename: "./[name].js"
    },
    plugins: [
        new WebpackNotifierPlugin()
    ]
};
