'use strict';

const debug = require('debug')('wechat-js-sign');
const crypto = require('crypto');

//algorithm by https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3
module.exports = function(param, options) {
  options = options || {};
  const stringA = Object.keys(param)
    .filter(key => (options.forceLowerCase ? key.toLowerCase() : key) !== options.excludedProp)
    .filter(key => param[key] != null && !isObject(param[key]))
    .map(key => `${options.forceLowerCase ? key.toLowerCase() : key}=${param[key]}`)
    .sort()
    .join('&');
  const signTemp = `${stringA}&key=${options.key}`;
  debug(signTemp);

  return crypto.createHash('md5').update(signTemp, 'utf8').digest('hex').toUpperCase();
};

function isObject(obj) {
  return obj === Object(obj);
}
