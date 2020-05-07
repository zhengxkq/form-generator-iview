/**
 * @file: carousel test case
 * @author: zhw
 * @Date: 2020-05-08 00:36:33
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-08 01:33:57
 */

import {expect} from 'chai';
import fieldCarousel from '../../src/fields/fieldCarousel';
import {shallowMount, mount} from '@vue/test-utils';


describe('fieldCarousel', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCarousel, {
        provide: {
            form: {
                model: {
                    city: 'shanghai'
                }
            }
        },
        propsData: {
            field: {
                type: 'Carousel',
                model: 'city',
                options: [
                    {
                        value: 'beijing',
                        label: '北京',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
                    },
                    {
                        value: 'shanghai',
                        label: '上海',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
                    },
                    {
                        value: 'guangzhou',
                        label: '广州',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481487900&di=5f506969bb6269da5b86952de5c4f8c2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F748%2Fw991h557%2F20190113%2FTR0G-hrpcmqw3706235.jpg'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481527030&di=268a917e6a6ef408c0e5fee8816ca6cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161128%2F387d785273bb4b31b48451c51a2e5359_th.gif'
                    }
                ]
            }
        }
    });

    it('renders the correct classes', () => {
        expect(wrapper.classes()).contains('fg-ivu-carousel');
    });

    it('confirm computedOptions length', () => {
        expect(wrapper.vm.computedOptions.length).to.equal(4);
    });

    it('confirm currentIndex', () => {
        expect(wrapper.vm.currentIndex).to.equal(1);
    });
});

describe('fieldCarousel subType video', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCarousel, {
        provide: {
            form: {
                model: {
                    city: 'two'
                }
            }
        },
        propsData: {
            field: {
                type: 'Carousel',
                model: 'city',
                subtype: 'video',
                options: [
                    {
                        value: 'one',
                        url: 'http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4'
                    },
                    {
                        value: 'two',
                        url: 'http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4'
                    }
                ]
            }
        }
    });
    it('confirm video', () => {
        expect(wrapper.contains('video')).to.be.true;
    });
});
describe('fieldCarousel valueAsOptions', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(fieldCarousel, {
        provide: {
            form: {
                model: {
                    city: [
                        {
                            value: 'one',
                            url: 'http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4'
                        },
                        {
                            value: 'two',
                            url: 'http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4'
                        }
                    ]
                }
            }
        },
        propsData: {
            field: {
                type: 'Carousel',
                model: 'city',
                subtype: 'video',
                valueAsOptions: true
            }
        }
    });
    it('confirm computedOptions length', () => {
        expect(wrapper.vm.computedOptions.length).to.equal(2);
    });
});
