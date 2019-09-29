var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OpenBrowserPlugin = require("open-browser-webpack-plugin")

var path = require("path")
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, "app")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "app/index.jsx"),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    resolve: {
        extensions: [".*", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.(css|less)?$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                            // hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(js|jsx)?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                include: [APP_PATH]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: ["url-loader?limit=200&minetype=application/font-woff"],
                include: [APP_PATH]
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: ["url-loader?limit=200&minetype=application/font-woff"],
                include: [APP_PATH]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ["url-loader?limit=200&minetype=application/octet-stream"],
                include: [APP_PATH]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ["file-loader"],
                include: [APP_PATH]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ["url-loader?limit=200&minetype=image/svg+xml"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                use: ["url-loader?limit=200&name=[name].[hash:5].[ext]"],
                include: [APP_PATH]
            },
            {
                test: /\.(mp3|json)(\?v=\d+\.\d+\.\d+)?$/,
                use: ["file-loader"],
                include: [APP_PATH]
            }
        ]
    },

    // eslint: {
    //     configFile: ".eslintrc" // Rules for eslint
    // },

    // postcss: [
    //     require("autoprefixer") //调用autoprefixer插件，例如 display: flex
    // ],

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: "http://localhost:8080"
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[chunkHash:8].css"
            // chunkFilename: "[id].[chunkHash:8].css"
            // ignoreOrder: false
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(
                JSON.parse(process.env.NODE_ENV == "dev" || "false")
            )
        })
    ],

    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            "/api": {
                target: "http://localhost:3000",
                secure: false
            }
        },
        // contentBase: "./public", //本地服务器所加载的页面所在的目录
        // colors: true, //终端中输出结果为彩色
        // historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    }
}
