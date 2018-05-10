const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'build/dist'),
    port: 9000,
  },
  entry: {
    app: path.resolve(__dirname, '..', 'src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'build/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '..', 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true, // 压缩 CSS 文件
              }
            },
            'postcss-loader'
          ]
        })
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  optimization: {
    // minimize: true, // 压缩js，4.0 替换掉了 UglifyJsPlugin
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: {
        //     test: /[\\/]node_modules[\\/]/,
        //     priority: -10
        // },
        /**
         * 将 node_modules 中的代码 压缩成一个 叫 vendors 的js文件中。
         * 我们自己的代码 打入到 entry 选项 配置的js 中。
         */
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        /**
         * 这个不知道有什么用
         */
        /* commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }, */
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    alias: (function (src) {
      var fs = require('fs');
      var moduleAlias = {
        '@root': src
      };
      return fs
        .readdirSync(src)
        .filter(function (dir) {
          try {
            return fs.statSync(path.resolve(src, dir)).isDirectory();
          } catch (e) {
            return false;
          }
        })
        .reduce(function (moduleAlias, dir) {
          moduleAlias['@' + dir] = path.resolve(src, dir);
          return moduleAlias;
        }, moduleAlias);
    })(path.resolve(__dirname, '../src'))
  },
  plugins: [
    // 自动将入口js 文件插入到Html页面中。
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
    new ExtractTextPlugin('[name].css'),
  ],
}