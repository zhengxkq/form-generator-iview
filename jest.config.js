/**
 * @file: jest config setting
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:09:54
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-19 19:51:39
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
    collectCoverage: true,
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec).[jt]s?(x)'
    ],
    preset: 'jest-puppeteer'
};
