// mocha

const Rx = require('rxjs');
const chai = require('chai');
const assert = chai.assert;

import { sum } from './sum.js';

describe('operator sum', () => {
  // 能正确完成求和
  it('should sum up range of value', () => {
    const source = Rx.Observable.range(1, 5);

    const result = source.pipe(sum);

    result.subscribe(
      value => assert.equal(15, value)
    );
  });

  // 能处理字符串数据
  it('should sum up string value', () => {
    const source = Rx.Observable.of('1', '2', '3');

    const result = source.pipe(sum);

    result.subscribe(
      value => assert.equal(6, value)
    );
  });

});