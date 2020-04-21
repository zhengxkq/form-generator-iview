/**
 * @file: button测试用例
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:43:53
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-19 19:51:05
 */

import {expect} from 'chai';
import fieldButton from '../../../src/fields/fieldButton';
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

    it('emit button click', () => {
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted().foo);
    });
});

describe('fieldButtonTextModel', () => {
    // 现在挂载组件，你便得到了这个包裹器
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
