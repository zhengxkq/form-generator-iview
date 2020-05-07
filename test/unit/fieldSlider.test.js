/**
 * @file: Slider测试用例
 * @author: gls(guoyu5212@163.com)
 * @Date: 2020-05-07 14:53:08
 * @Last Modified by: gls
 * @Last Modified time: 2020-05-07 17:25:00
 */

import {expect} from 'chai';
import fieldSlider from '../../src/fields/fieldSlider';
import {mount} from '@vue/test-utils';

describe('fieldSlider', () => {
    const wrapper = mount(fieldSlider, {
        provide: {
            form: {
                model: {percent: 40}
            }
        },
        propsData: {
            field: {
                type: 'Slider',
                model: 'percent',
                showInput: true,
                left: true,
                step: 20,
                inputSize: 'default'
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.classes()).contains('fg-ivu-slider-left');
    });

    it('renders the correct step', () => {
        expect(wrapper.attributes('step')).to.equal('20');
    });

    it('renders the correct value', () => {
        expect(wrapper.attributes('value')).to.equal('40');
    });

    it('emit slider on-change', async () => {
        wrapper.vm.$emit('on-change', 60);
        // 等待事件处理完成
        await wrapper.vm.$nextTick();
        // 断言事件的数量
        expect(wrapper.emitted('on-change').length).to.equal(1);
        // 断言事件的有效数据
        expect(wrapper.emitted('on-change')[0]).to.deep.equal([60]);
    });
});

describe('fieldSliderRange', () => {
    const wrapper = mount(fieldSlider, {
        provide: {
            form: {
                model: {percent: [30, 80]}
            }
        },
        propsData: {
            field: {
                type: 'Slider',
                model: 'percent',
                range: true,
                step: 2
            }
        }
    });

    it('renders the correct step', () => {
        expect(wrapper.attributes('step')).to.equal('2');
    });

    it('renders the correct value', () => {
        expect(wrapper.attributes('value')).to.equal('30,80');
    });

});
