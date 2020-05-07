/**
 * @file: test require
 * @author: zhw
 * @Date: 2020-05-05 23:58:58
 * @Last Modified by: zhw
 * @Last Modified time: 2020-05-06 00:01:18
 */
// require all test files (files that ends with .spec.js)
const testsContext = require.context('./unit', true, /\.test$/);
testsContext.keys().forEach(testsContext);
