const VModule = require('vmodule-webpack-plugin');
const pkg = require('./package.json');
const alias = require('./alias');

module.exports = function (webpackConf, webpack) {
  let info = JSON.stringify({ name: pkg.name, version: pkg.version });
  webpackConf.plugins.push(new VModule({
    name: '$info',
    type: 'js',
    content: `export default ${info}`
  }));
  webpackConf.plugins.push(new VModule({
    name: '$config',
    type: 'js',
    content: `export default {}`
  }));
  webpackConf.resolve = webpackConf.resolve || {};
  webpackConf.resolve.alias = webpackConf.resolve.alias || {};
  Object.assign(webpackConf.resolve.alias, alias);
};