'use strict';

const crypto = require('crypto');

//algorithm by https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3
module.exports = function(param, options) {
  options = options || {};
  const stringA = Object.keys(param)
    .filter(key => key !== options.excludedProp)
    .filter(key => param[key] != null && !isObject(param[key]))
    .sort()
    .map(key => `${key}=${param[key]}`)
    .join('&');
  const signTemp = `${stringA}&key=${options.key}`;

  return crypto.createHash('md5').update(signTemp, 'utf8').digest('hex').toUpperCase();
};

function isObject(obj) {
  return obj === Object(obj);
}
