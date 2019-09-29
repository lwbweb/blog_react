var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

var path = require("path")
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, "app")

module.exports = {
    mode: "production",
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

    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkHash:8].css",
            chunkFilename: "[id].[chunkHash:8].css"
            // ignoreOrder: false
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.(css|less)$/g,
            canPrint: true
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
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false,
                    compress: {
                        // 在UglifyJs删除没有用到的代码时不输出警告
                        //warnings: false,
                        // 删除所有的 `console` 语句，可以兼容ie浏览器
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量``
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true
                    },
                    dead_code: true
                }
            })
        ],
        runtimeChunk: {
            name: "single"
        },
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            },
            chunks: "all",
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    priority: 10,
                    enforce: true
                },
                libs: {
                    test: /(react|react-dom|react-redux|react-router|redux|whatwg-fetch|immutable)/,
                    chunks: "all",
                    priority: 20,
                    enforce: true
                },
                9: {
                    test: /.*/,
                    chunks: "async",
                    minChunks: 9,
                    priority: 99,
                    enforce: true
                },
                5: {
                    test: /.*/,
                    chunks: "async",
                    minChunks: 5,
                    priority: 90,
                    enforce: true
                },
                3: {
                    test: /.*/,
                    chunks: "async",
                    minChunks: 3,
                    priority: 80,
                    enforce: true
                },
                2: {
                    test: /.*/,
                    chunks: "async",
                    minChunks: 2,
                    priority: 70,
                    enforce: true
                },
                default: false
            }
        }
    }
}
