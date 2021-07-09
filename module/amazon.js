const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Selector = require('./Selector');

async function amazon(search) {
  const products = [];
  try {
    const url = `https://www.amazon.com.tr/s?k=${search}`;
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--lang=tr-TR,tr',
      ],
      headless: true,
    });
    const page = await browser.newPage();
    // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0');
    await page.goto(url);
    await page.waitForSelector('div.s-main-slot', {visible: true});
    const content = await page.content();

    const $ = cheerio.load(content);
    $('div.s-main-slot div.s-result-item').each((i, e) => {
      $element = $(e);
      const $price = $element.find('span.a-offscreen').text().trim();
      if ($price) {
        const title = $element.find('span.a-size-base-plus').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
          const product = {
            title,
            price: $price.split('TL')[0].trim().split(',')[0].replace('.', ''),
            // TODO: turn all prices to valid TRY which is sortable
            url: `https://www.amazon.com.tr${$element.find('a.a-link-normal').attr('href').split('ref')[0]}`,
            source: 'amazon'
          };
          products.push(product);
        }
      }
    });

    await browser.close();
  } catch (error) {
    console.log(error);
  }
  return products.sort((a, b) => a.price - b.price);
}

module.exports = amazon;
