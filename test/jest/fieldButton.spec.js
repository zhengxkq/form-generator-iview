/**
 * @file: button测试用例
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:43:53
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-19 23:50:21
 */
import 'expect-puppeteer';
import fieldButton from '../../src/fields/fieldButton';
import {mount} from '@vue/test-utils';

describe('Google', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:9000/#/doc/Button');
    });
    test('asj', async ()=> {
        await expect(page).toClick('span', { text: '删除' });

    });
    test('find 删除 text', async () => {
        await expect(page).toClick('.ivu-btn-error');
        await expect(page).toMatch('has been triggered');
    });
    // afterAll(() => {
    //     browser.close();
    // });
});
