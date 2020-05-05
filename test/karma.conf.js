/**
 * @file: karma配置
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-19 01:19:28
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-05 23:59:58
 */

var webpackConfig = require('../build/webpack.test.config');
// 
module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        files: ['./index.js'],

        preprocessors: {
            './index.js': ['webpack']
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        // 下面是覆盖报告
        // coverage是代码测试覆盖率的一个reporter，也就是说告诉你项目的代码有多少测试了
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        },
        reporters: ['spec', 'coverage'],

        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-coverage',
            // 'karma-sourcemap',
            'karma-webpack',
            'karma-spec-reporter',
            'karma-coverage-istanbul-reporter'
        ],
        colors: true,
        concurrency: Infinity
    });
};