const puppeteer = require('puppeteer');
const args = require('yargs')
  .default('debug', false)
  .default('launch.executablePath', 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe')
  .default('navigation.timeout', 30 * 1000)
  .default('navigation.waitUntil', 'networkidle0')
  .default('pdf.displayHeaderFooter', false)
  .default('pdf.margin.bottom', '1in')
  .default('pdf.margin.left', '1in')
  .default('pdf.margin.right', '1in')
  .default('pdf.margin.top', '1in')
  .default('pdf.path', 'print.pdf')
  .argv;

(async () => {
  console.log(args);
  const browser = await puppeteer.launch(args.launch).catch(console.error);
  const page = await browser.newPage().catch(console.error);
  page.on('error', error => {
    console.error(error);
  });
  page.on('pageerror', error => {
    console.error(error);
  });
  page.on('requestfailed', error => {
    console.error(`requestfailed: ${error}`);
  });
  if (args.debug) {
    page.on('console', msg => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`${i}: ${msg.args()[i]}`);
    });
    page.on('dialog', log => {
      console.log(`dialog: ${log}`);
    });
    page.on('domcontentloaded', log => {
      console.log(`domcontentloaded: ${log}`);
    });
    page.on('frameattached', log => {
      console.log(`frameattached: ${log}`);
    });
    page.on('framedetached', log => {
      console.log(`framedetached: ${log}`);
    });
    page.on('framenavigated', log => {
      console.log(`framenavigated: ${log}`);
    });
    page.on('load', log => {
      console.log(`load: ${log}`);
    });
    page.on('metrics', log => {
      console.log(`metrics: ${log}`);
    });
    page.on('request', log => {
      console.log(`request: ${log}`);
    });
    page.on('requestfinished', log => {
      console.log(`requestfinished: ${log}`);
    });
  }
  await page.setCookie(args.cookie).catch(console.error);
  await page.goto(args.url, args.navigation).catch(console.error);
  await page.pdf(args.pdf).catch(console.error);
  await browser.close().catch(console.error);
})();
