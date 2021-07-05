/* eslint-disable no-undef */
const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
// const RandomUA = require('puppeteer-extra-plugin-anonymize-ua');
const Selector = require('./Selector');

// Puppeteer things
async function hb(search) {
  const products = [];
  try {
    const url = `https://www.hepsiburada.com/ara?q=${search}&siralama=artanfiyat`;
    puppeteer.use(StealthPlugin());
    // puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
    // puppeteer.use(RandomUA());
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
      ],
    });
    const page = await browser.newPage();
    // eslint-disable-next-line max-len
    // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0');
    await page.goto(url);
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

        if (isTitleValid !== false) {
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
    // console.log(products);
    await browser.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return products.sort((a, b) => a.price - b.price);
}

module.exports = hb;
