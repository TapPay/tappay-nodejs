var path = require('path')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
      return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
    target: 'node',
    entry: './build/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'TapPay.js',
        libraryTarget : "commonjs2"
    },
    externals: nodeModules
}