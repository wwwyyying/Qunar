/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:30:49
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-05 21:34:23
 */ 
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
    .set('styles', path.join(__dirname, './src/assets/styles'))
    .set('img', path.join(__dirname, './src/assets/img'))
    .set('@', path.join(__dirname, './src/'))
    .set('common', path.join(__dirname, './src/common/'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
