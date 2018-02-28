const puppeteer = require('puppeteer');
const args = require('yargs').argv;

(async () => {
  console.log(args);
  const browser = await puppeteer.launch({ executablePath: args.executable }).catch(console.error);
  const page = await browser.newPage().catch(console.error);
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i)
      console.log(`${i}: ${msg.args()[i]}`);
  });
  page.on('dialog', log => {
    console.log(log);
  });
  page.on('domcontentloaded', log => {
    console.log(log);
  });
  page.on('error', error => {
    console.error(error);
  });
  page.on('frameattached', log => {
    console.log(log);
  });
  page.on('framedetached', log => {
    console.log(log);
  });
  page.on('framenavigated', log => {
    console.log(log);
  });
  page.on('load', log => {
    console.log(log);
  });
  page.on('metrics', log => {
    console.log(log);
  });
  page.on('pageerror', error => {
    console.error(error);
  });
  page.on('request', log => {
    console.log(log);
  });
  page.on('requestfailed', log => {
    console.log(log);
  });
  page.on('requestfinished', log => {
    console.log(log);
  });
  await page.setCookie(args.cookie).catch(console.error);
  await page.goto(args.url, { timeout: 0, waitUntil: 'networkidle0' }).catch(console.error);
  await page.pdf({ displayHeaderFooter: false, margin: { bottom: '1in', left: '1in', right: '1in', top: '1in' }, path: args.file }).catch(console.error);
  await browser.close().catch(console.error);
})();
