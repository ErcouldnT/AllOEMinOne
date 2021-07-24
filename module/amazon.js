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
    const page = (await browser.pages())[0];
    // const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "cache-control": "max-age=0",
      "cookie": "session-id=259-5432169-1580409; i18n-prefs=TRY; csm-hit=tb:FA5ZWEM2YHN3Q76QHMCB+s-FA5ZWEM2YHN3Q76QHMCB|1625795255399&t:1625795255399&adb:adblk_no; ubid-acbtr=258-0018155-9994468; session-token=k5JoI7dFO+bboA1YSjG0c8EIBMOfvgmUzJkdB0EdzhtgircA4iBIRAcE1GUkqY7rHJ/R0L7mwsBB0UKPKXZPLPsfyzhQDjsul3LHinsa3hTjPGeypNEp7RwIjOKeE3JRbVlwTyapWbqOpAt9t72+OxOOQhyW/N/pM5R8ZuTEnehGMF0R+PxoJUSC+xXYGihH1YGWwBwQRrqKKrNFANsCxjddURITnjHxXHu5Tm3O3OAjroGAFoiOCBAhXHmLPTJz; session-id-time=2082758401l",
      "downlink": "10",
      "ect": "4g",
      "rtt": "0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      'Accept-Language': 'tr-TR,tr'
    });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0');
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

        if (isTitleValid) {
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
    // await page.waitForTimeout(9999 * 1000);
    await browser.close();
  } catch (error) {
    console.log(error);
  }
  return products.sort((a, b) => a.price - b.price);
}

// Promise.all([amazon("msi mpg b550 gaming edge")]).then(results => {
//   console.log(results);
// });

module.exports = amazon;
