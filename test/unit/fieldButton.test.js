/**
 * @file: button测试用例
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:43:53
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-24 11:10:13
 */

import {expect} from 'chai';
import fieldButton from '../../src/fields/fieldButton';
import {mount} from '@vue/test-utils';

describe('fieldButton', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(fieldButton, {
        provide: {
            form: {
                model: {}
            }
        },
        propsData: {
            field: {
                type: 'Button',
                text: '删除',
                subtype: 'error',
                action: {
                    type: 'event',
                    name: 'delete'
                }
            }
        }
    });

    it('renders the correct markup', () => {
        expect(wrapper.html()).contains('<button type="error" size="default" class="fg-ivu-button">删除</button>');
    });

    it('confirm button text', () => {
        expect(wrapper.find('button').text()).contains('删除');
    });

    it('emit button click', async () => {
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted()['on-button-event'][0][0]).to.deep.equal({
            name: 'delete',
            field: {
                type: 'Button',
                text: '删除',
                subtype: 'error',
                action: {
                    type: 'event',
                    name: 'delete'
                }
            }
        });
    });
});

describe('fieldButtonTextModel', () => {
    const wrapper = mount(fieldButton, {
        provide: {
            form: {
                model: {
                    textModel: '成功'
                }
            }
        },
        propsData: {
            field: {
                type: 'Button',
                text: '删除',
                subtype: 'error',
                textModel: 'textModel',
                action: {
                    type: 'event',
                    name: 'delete'
                }
            }
        }
    });
    it('confirm button text', () => {
        expect(wrapper.find('button').text()).contains('成功');
    });
});

describe('fieldButtonTypeAjax', () => {
    const wrapper = mount(fieldButton, {
        provide: {
            form: {
                model: {
                }
            }
        },
        propsData: {
            field: {
                type: 'Button',
                text: '请求数据',
                subtype: 'primary',
                action: {
                    type: 'ajax'
                }
            }
        }
    });
    it('confirm button type ajax', async () => {
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted()['on-http-request'].length).to.equal(1);
    });
});
