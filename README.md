# wechat-js-signature
A library building wechat API signature(https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3) in node.js
(生成微信API的签名)

# Install 
`npm install wechat-js-signature`

# Examples

## Basic usage
```js
  const sign = require('wechat-js-signature');
  const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
  const source = {
    appid: 'wxd930ea5d5a258f4f',
    'mch_id': 10000100,
    'device_info': 1000,
    body: 'test',
    'nonce_str': 'ibuaiVcKdpRxkhJA'
  };
  const opt = { key: '192006250b4c09247ec02edce69f6a2d' };
  expect(sign(source, opt)).to.be.equal(expected);
```

## Set the excluded property which would not be signed.
```js
  const sign = require('wechat-js-signature');
  const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
  const source = {
    appid: 'wxd930ea5d5a258f4f',
    'mch_id': 10000100,
    'device_info': 1000,
    body: 'test',
    'nonce_str': 'ibuaiVcKdpRxkhJA',
    sign: 'the signature you wanna verify, so you won`t sign it'
  };
  const opt = {
    key: '192006250b4c09247ec02edce69f6a2d',
    excludedProp: 'sign'
  };
  expect(sign(source, opt)).to.be.equal(expected);
```
## Only null or undefined value will be ignored
```js
  const source = {
    appid: 'wxd930ea5d5a258f4f',
    body: 'test',
    foo: null, //this won't be signed
    bar: undefined, //this won't be signed too
    baz: 0 //this will be signed
  };
```
# License

MIT

