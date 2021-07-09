const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Selector = require('./Selector');

async function itopya(search) {
  const products = [];
  try {
    const url = `https://www.itopya.com/arama/?o=far&a=${search}`;
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
    await page.waitForSelector('div.featured-products', {visible: true});
    const content = await page.content();

    const $ = cheerio.load(content);
    $('div.featured-products div.product').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('div.product-info div div.new').text().trim();
      if ($price) {
        const title = $element.find('div div.product-title a').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
          const product = {
            title,
            price: $price.split(' ')[0].slice(0, -3).replace('.', ''),
            // TODO: if there is more than one "." replace the last one to ","
            url: $element.find('div div.product-title a').attr('href'),
            source: 'itopya'
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

module.exports = itopya;