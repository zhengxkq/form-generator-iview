/**
 * @file: checkbox test case
 * @author: zhw
 * @Date: 2020-05-08 00:36:33
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-11 00:02:42
 */

import {expect} from 'chai';
import fieldCheckbox from '../../src/fields/fieldCheckbox';
import {shallowMount} from '@vue/test-utils';


describe('fieldCheckbox', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCheckbox, {
        provide: {
            form: {
                model: {
                }
            }
        },
        propsData: {
            field: {
                type: 'Checkbox',
                model: 'fruit',
                options: [
                    {label: '西瓜', value: '1'},
                    {label: '苹果', value: '2'},
                    {label: '梨', value: '3', disabled: true}
                ]
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.contains('Checkbox')).to.be.true;
    });

    it('confirm computedOptions length', () => {
        expect(wrapper.vm.computedOptions.length).to.equal(3);
    });
});
