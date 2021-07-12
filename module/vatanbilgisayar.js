const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Selector = require('./Selector');
puppeteer.use(StealthPlugin());

async function vatanbilgisayar(search) {
  const products = [];
  try {
    const url = `https://www.vatanbilgisayar.com/arama/${search}`;
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
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0');
    await page.goto(url);
    await page.waitForSelector('div.wrapper-product', {visible: true});
    const content = await page.content();

    const $ = cheerio.load(content);
    $('div.wrapper-product div div').each((i, e) => {
      $element = $(e);
      const $price = $element.find('div.product-list__cost').text().trim();
      if ($price) {
        const title = $element.find('div.product-list__product-name').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.replace(' ,', ',').split(' ')[0].split(',')[0].replace('.', ''),
            url: `https://www.vatanbilgisayar.com${$element.find('a.product-list__link').attr('href')}`,
            source: 'vatanbilgisayar'
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

module.exports = vatanbilgisayar;
