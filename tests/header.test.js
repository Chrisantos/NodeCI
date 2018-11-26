const puppeteer = require('puppeteer');
const sessionFactory = require('./factories/sessionFactory');
const userFactory = require('./factories/userFactory');
const Page = require('./helpers/page');

let page;
beforeEach(async () =>{
    page = await Page.build();

    await page.goto('http://localhost:3000');
});

afterEach(async () =>{
    await page.close();
})

test('We can launch a browser', async () =>{
    // const text = await page.$eval('a.brand-logo', el => el.innerHTML);
    const text = await page.getContentsOf('a.brand-logo');

    expect(text).toEqual("Blogster");
});

test('Clicking on the login link', async () =>{
    await page.click('.right a');

    const url = page.url();

    expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed, in shows logout button', async () =>{
    await page.login();

    const text = await page.getContentsOf('a[href = "/auth/logout"]');
    expect(text).toMatch("Logout");
})