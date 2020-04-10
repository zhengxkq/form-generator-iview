/**
 * @file: button测试用例
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:43:53
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-10 15:52:21
 */

import fieldButton from '../../../src/fields/fieldButton';
import {mount} from '@vue/test-utils';

describe('fieldButton', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = mount(fieldButton, {
        provide: {
            form() {
                return {model: {}};
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
        expect(wrapper.html()).toContain('<button type="error" size="default" class="fg-ivu-button">删除</button>');
    });

    // 也便于检查已存在的元素
    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true);
    });
});