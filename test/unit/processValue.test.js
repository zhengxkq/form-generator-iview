/**
 * @file: 测试
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 01:05:51
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-24 11:09:59
 */
import {expect} from 'chai';
import Vue from 'vue';
import {setValue} from '../../src/utils/processValue';

describe('setValue', () => {
    expect(setValue.call(new Vue(), {
        originModel: {},
        model: 'model',
        value: 'abc'
    })).to.deep.equal({
        model: 'abc'
    });
});
