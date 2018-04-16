### Webpack：4.5.0

### Webpack 4.0 以后，在配置文件中改变 entry 和output  无用，可以在package.json的scripts 中指定：
```
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```

>  这篇文章不错：https://blog.zfanw.com/webpack-tutorial/