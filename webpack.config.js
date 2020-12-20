const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        frontend: ['./src/index.js'],
        customizer: './src/js/customizer.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                test: /\.jsx$/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: 'svg-defs.svg'
                }
            },
            {
                test: /\.(jpe?g|png|gif)\$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            name: '[name].[ext]'
                        }
                    },
                    'img-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new BrowserSyncPlugin({
          files: ['**/*.php','**/*.twig'],
          open: 'external',
          port: 80,
          host: 'landing.local',
          proxy: 'landing.local',
            injectChanges: true,
        })
    ],
    optimization: {
        minimizer: [new UglifyJSPlugin(), new OptimizeCssAssetsPlugin()]
    }
};

