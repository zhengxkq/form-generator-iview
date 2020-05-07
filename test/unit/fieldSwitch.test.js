/**
 * @file: Switch测试用例
 * @author: gls(guoyu5212@163.com)
 * @Date: 2020-04-29 15:20:08
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-06 00:04:07
 */

import {expect} from 'chai';
import fieldSwitch from '../../src/fields/fieldSwitch';
import {mount} from '@vue/test-utils';

describe('fieldSwitch', () => {
    const wrapper = mount(fieldSwitch, {
        provide: {
            form: {
                model: {open: false}
            }
        },
        propsData: {
            field: {
                type: 'Switch',
                model: 'open',
                true: {
                    value: 1
                },
                false: {
                    value: 0
                }
            }
        }
    });

    it('renders the correct markup', () => {
        expect(wrapper.html()).contains('<span tabindex="0" class="ivu-switch ivu-switch-default fg-ivu-switch"><input type="hidden" value="false"> <span class="ivu-switch-inner"><!----> <!----></span></span>');
    });

    it('confirm input value', () => {
        expect(wrapper.find('input').attributes('value')).to.equal('false');
    });

    it('change switch input value', async () => {
        /*
        shallowMount
            '<i-switch-stub truevalue="1" falsevalue="0" size="default" class="fg-ivu-switch">
            <!---->
            <!---->
            </i-switch-stub>'
        */

        /*
        mount
            '<span tabindex="0" class="ivu-switch ivu-switch-default fg-ivu-switch">
            <input type="hidden" value="false"> <span class="ivu-switch-inner"><!----> <!----></span></span>'
        */

        // mount 挂载后渲染dom元素，需要触发dom事件，并可以拿到事件后改变的值。

        wrapper.find('span').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.find('input').attributes('value')).to.equal('1');

        // shallowMount 挂载组件，问题：触发事件后数据状态的改变检测不到
    });
});
