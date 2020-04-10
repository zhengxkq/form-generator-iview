/**
 * @file: 测试
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 01:05:51
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-10 16:03:27
 */
const {setValue, getValue} = require('../../../src/utils/processValue');
const Vue = require('vue');

test('setValue', () => {
    expect(setValue.call(new Vue(), {
        originModel: {},
        model: 'model',
        value: 'abc'
    })).toEqual({
        model: 'abc'
    });
});
