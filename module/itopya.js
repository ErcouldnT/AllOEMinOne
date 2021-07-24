const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Selector = require('./Selector');

async function itopya(search) {
  const products = [];
  try {
    const url = `https://www.itopya.com/aramaMotoruAjax.php?a=${search}`;
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
    await page.waitForSelector('div.search-products', { visible: true });
    const content = await page.content();

    const $ = cheerio.load(content);
    $('div.search-products a').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('div.text-right').text().trim();
      if ($price) {
        const title = $element.find('div.col-md-8').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.replace(".", ""),
            url: $element.attr('href'),
            img: $element.find('img').attr('src'),
            source: 'itopya'
          };
          products.push(product);
        }
      }
    });
    // await page.waitForTimeout(9999 * 1000);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
  return products.sort((a, b) => a.price - b.price);
}

// Promise.all([itopya("ryzen 5600")]).then(results => {
//   console.log(results);
// });

module.exports = itopya;
