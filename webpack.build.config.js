const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const path = require('path');
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}
const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'src/assets/js/postcss.config.js'
            }
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              'src/assets/css/fonts.scss',
              'src/assets/css/vars.scss'
            ]
          }
        }
      ]

    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: './postcss.config.js'
            }
          }
        },
      ]
    },
    {
      test: /\.(woff|woff2|eot|otf|ttf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: `${PATHS.assets}fonts/`,
        publicPath: "../fonts/"
      }
    },
    {
      test: /\.(jpg|gif|webp)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}images/`,
          publicPath: "../images/"
        }
      },]
    },
    {
      test: /\.(png)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}images/png/`,
          publicPath: "../images/png/"
        }
      }]
    },
    {
      test: /\.(svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}images/svg/`,
          publicPath: "../images/svg/"
        }
      }]
    },

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css?v=' + new Date().getTime(),
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }]
      },
      canPrint: true
    }),
    new ImageminWebpWebpackPlugin(
      {
        config: [{
          test: /\.(jpe?g|png)/,
          options: {
            quality: 100
          }
        }],
        strict: true
      }
    ),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})