/**
 * @file: Tag测试用例
 * @author: gls(guoyu5212@163.com)
 * @Date: 2020-04-28 16:50:00
 * @Last Modified by: gls
 * @Last Modified time: 2020-04-29 14:20:02
 */

import {expect} from 'chai';
import fieldTag from '../../src/fields/fieldTag';
import {mount} from '@vue/test-utils';

describe('simpleFieldTag', () => {
    const wrapper = mount(fieldTag, {
        provide: {
            form: {
                model: {"status":"1"}
            }
        },
        propsData: {
            field: {
                type: 'Tag',
                model: "status",
                options: [
                    {
                        name: '正常',
                        value: '1',
                        color: 'primary'
                    }
                ]
            }
        }
    });
    
    it('renders the correct simple tag markup', () => {
        expect(wrapper.html()).contains('<tag color="primary" type="border" class="fg-ivu-tag">正常</tag>')
    })
    
});

describe('multipleFieldTag', () => {
    const wrapper = mount(fieldTag, {
        provide: {
            form: {
                model: {"status": ['1', '2']}
            }
        },
        propsData: {
            field: {
                type: 'Tag',
                model: "status",
                options: [
                    {
                        name: '正常',
                        value: '1',
                        color: 'primary'
                    },
                    {
                        name: '黑用户',
                        value: '2',
                        color: 'error'
                    }
                ]
            }
        }
    });
    
    it('renders the correct multiple tag markup', () => {
        expect(wrapper.html()).include('<tag border="" color="primary" type="border">正常</tag>');
        expect(wrapper.html()).include('tag border="" color="error" type="border">黑用户</tag>');
    });

});

describe('modelErrFieldTag', () => {
    const wrapper = mount(fieldTag, {
        provide: {
            form: {
                model: {"status": '2'}
            }
        },
        propsData: {
            field: {
                type: 'Tag',
                model: "status",
                options: [
                    {
                        name: '正常',
                        value: '1',
                        color: 'primary'
                    }
                ]
            }
        }
    });
    
    it('renders the empty tag markup', () => {
        expect(wrapper.isEmpty()).to.be.true
    });

});
