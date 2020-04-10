/**
 * @file: jest config setting
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:09:54
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-10 16:46:21
 */

module.exports = {
    moduleNameMapper: {
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    collectCoverage: true
};
