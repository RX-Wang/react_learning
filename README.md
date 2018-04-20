### 一、Webpack
> Webpack：4.5.0

```
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```
### 1、css 相关：

>需要用最新的  extract-text-webpack-plugin

```
$ npm i -D extract-text-webpack-plugin@next
```

### 2、用 splitChunks 替换 CommonsChunkPlugin

```
module.exports = {
  mode: {...},
  entry: {...},
  output: {...},
  optimization: {
    minimize: true, // 压缩js，4.0 替换掉了 UglifyJsPlugin
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [...],
}
```

>  这篇文章不错：https://blog.zfanw.com/webpack-tutorial/