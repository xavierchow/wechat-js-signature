'use strict';

const chai = require('chai');
const expect = chai.expect;
const sign = require('../index');

describe('signature', () => {
  it('should be about to signature', () => {
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
  });

  it('should not encode null property', () => {
    const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
    const source = {
      appid: 'wxd930ea5d5a258f4f',
      'mch_id': 10000100,
      'device_info': 1000,
      body: 'test',
      'nonce_str': 'ibuaiVcKdpRxkhJA',
      foo: null
    };
    const opt = { key: '192006250b4c09247ec02edce69f6a2d' };
    expect(sign(source, opt)).to.be.equal(expected);
  });

  it('should not encode undefined property', () => {
    const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
    const source = {
      appid: 'wxd930ea5d5a258f4f',
      'mch_id': 10000100,
      'device_info': 1000,
      body: 'test',
      'nonce_str': 'ibuaiVcKdpRxkhJA',
      foo: undefined
    };
    const opt = { key: '192006250b4c09247ec02edce69f6a2d' };
    expect(sign(source, opt)).to.be.equal(expected);
  });

  it('should signature with 0 ', () => {
    const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
    const source = {
      appid: 'wxd930ea5d5a258f4f',
      'mch_id': 10000100,
      'device_info': 1000,
      body: 'test',
      'nonce_str': 'ibuaiVcKdpRxkhJA',
      foo: 0
    };
    const opt = { key: '192006250b4c09247ec02edce69f6a2d' };
    expect(sign(source, opt)).to.be.not.equal(expected);
  });

  it('should ignore the nested object', () => {
    const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
    const source = {
      appid: 'wxd930ea5d5a258f4f',
      'mch_id': 10000100,
      'device_info': 1000,
      body: 'test',
      'nonce_str': 'ibuaiVcKdpRxkhJA',
      foo: {}
    };
    const opt = { key: '192006250b4c09247ec02edce69f6a2d' };
    expect(sign(source, opt)).to.be.equal(expected);
  });

  it('should ignore the excludedProp', () => {
    const expected = '9A0A8659F005D6984697E2CA0A9CF3B7';
    const source = {
      appid: 'wxd930ea5d5a258f4f',
      'mch_id': 10000100,
      'device_info': 1000,
      body: 'test',
      'nonce_str': 'ibuaiVcKdpRxkhJA',
      bar: 'baz'
    };
    const opt = {
      key: '192006250b4c09247ec02edce69f6a2d',
      excludedProp: 'bar'
    };
    expect(sign(source, opt)).to.be.equal(expected);
  });
});
