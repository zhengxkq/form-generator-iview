/**
 * @file: cascader test case
 * @author: zhw
 * @Date: 2020-05-08 00:36:33
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-10 23:58:43
 */

import {expect} from 'chai';
import fieldCascader from '../../src/fields/fieldCascader';
import {shallowMount} from '@vue/test-utils';


describe('fieldCascader', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCascader, {
        provide: {
            form: {
                model: {
                }
            }
        },
        propsData: {
            field: {
                type: 'Cascader',
                model: 'attraction',
                options: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.contains('Cascader')).to.be.true;
    });

    it('confirm computedOptions length', () => {
        expect(wrapper.vm.computedOptions.length).to.equal(2);
    });
});

describe('fieldCascader api', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCascader, {
        provide: {
            form: {
                model: {
                }
            }
        },
        propsData: {
            field: {
                type: 'Cascader',
                model: 'attraction',
                api: '/cascaderApi'

            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.contains('Cascader')).to.be.true;
    });
    // todo 增加api测试 服务
    // it('confirm computedOptions length', () => {
    //     expect(wrapper.vm.computedOptions.length).to.equal(2);
    // });
});

// 增加选择测试用例