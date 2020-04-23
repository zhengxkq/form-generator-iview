/**
 * @file: button测试用例
 * @author: zhw(zhenghaiwang@baidu.com)
 * @Date: 2020-04-10 09:43:53
 * @Last Modified by: zhw
 * @Last Modified time: 2020-04-23 11:03:38
 */
import 'expect-puppeteer';

describe('test fieldButton', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:9000/#/doc/Button');
    });
    test('find 删除 text', async () => {
        await expect(page).toClick('.ivu-btn-error');
        await expect(page).toMatch('has been triggered');
    });
    test('field.textModel and type url ', async () => {
        await expect(page).toClick('button span', {text: '张三的明细'});
        const target = await browser.waitForTarget(t => t.url() === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6');
        const newPage = await target.page();
        await expect(newPage.url()).toContain('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6');
        await newPage.close();
    });

    test('type route', async () => {
        await expect(page).toClick('button span', {text: '路由到详情'});
        await page.waitForNavigation();
        await expect(page.url()).toContain('http://localhost:9000/#/home?test=aaa');
        await page.goBack();
    });

    test('type ajax', async () => {
        await expect(page).toClick('button span', {text: '发送请求'});
        await page.on('request', async (request) => {
            await expect(request.url()).toContain('/curdDelete');
        });
    });
    // afterAll(async () => {
    //     await browser.close();
    // });
});
