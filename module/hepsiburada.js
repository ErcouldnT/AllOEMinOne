/* eslint-disable no-undef */
const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
// puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')());
// puppeteer.use(require('puppeteer-extra-plugin-block-resources')({
//   blockedTypes: new Set(['image', 'stylesheet'])
// }));
const Selector = require('./Selector');
puppeteer.use(StealthPlugin());
// puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

// Puppeteer things
async function hb(search) {
  const products = [];
  try {
    const url = `https://www.hepsiburada.com/ara?q=${search}`;
    // https://arh.antoinevastel.com/bots/areyouheadless
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--lang=tr-TR,tr',
      ],
      headless: true,
    });
    // const page = (await browser.pages())[0];
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3",
    });
    await page.setUserAgent('Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Raspbian Chromium/74.0.3729.157 Chrome/74.0.3729.157 Safari/537.36');
    // Change it.
    // await page.setCookie({
    //   "cf_chl_2": "a69ac508ba4b292",
    //   "cf_chl_prog": "x8",
    //   "cf_clearance": "3ce074e8c097fa391db6f60d0be81abadf160066-1625798614-0-150",
    //   "PHPSESSID": "pta04jeo6kni4jcv2ocpvudv7e",
    // });
    await page.goto(url);
    // await page.waitForSelector('ul.product-list', {visible: true});
    const content = await page.content();

    const $ = cheerio.load(content);
    $('ul.product-list li.search-item').each((i, e) => {
      $element = $(e);
      // console.log($element);
      let $price = $element.find('div.price-value').text().trim().split('\n')[0];
      if (!$price) {
        // eslint-disable-next-line prefer-destructuring
        $price = $element.find('span.product-price').text().trim().split(' ')[0];
      }
      if ($price) {
        const title = $element.find('h3.product-title').attr('title').trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split(',')[0].replace('.', ''),
            url: `https://www.hepsiburada.com${$element.find('div a').attr('href')}`,
            source: 'hepsiburada'
          };
          products.push(product);
        }
      }
    });
    
    await browser.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return products.sort((a, b) => a.price - b.price);
}

module.exports = hb;
