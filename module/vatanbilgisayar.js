const cheerio = require('cheerio');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const Selector = require('./Selector');

async function vatanbilgisayar(search) {
  const products = [];
  try {
    const url = `https://www.vatanbilgisayar.com/arama/${search}/?srt=UP`;
    puppeteer.use(StealthPlugin());
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
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "tr-TR,tr",
      "cache-control": "max-age=0",
      "cookie": "checkCookie=true; cf_chl_2=745dd2823aadbd8; cf_chl_prog=x10; cf_clearance=d10997fe0af2d6b35e6c4cd76b0d9c5b31f61edb-1625801893-0-150; ASP.NET_SessionId=vwvrdokrrhgoplzyqkfdrgyg; aid=jbzyvaxcn4xg1byk5a3w1d3c; __RequestVerificationToken=PyAyz3K7IMwyy1dTetPmkLp4ngI56D1iNy7beXAYMXt__QWmSuk6DEoPUsWjMrhTa7l2jfhi-FYa2j-2ZZOtVtmd6Vs1; _gcl_au=1.1.196265486.1625801895; enh_visitor_session=ba4e18bf201d6466aa0b2a90ac856bdd; enh_source=https://www.vatanbilgisayar.com/arama/aoc%20c24g1/?srt=UP; _ga=GA1.2.1589518477.1625801896; _gid=GA1.2.776785130.1625801896; _gat_UA-5658566-3=1; _fbp=fb.1.1625801896096.1192521932; VLCV1OK=1; OfferMiner_ID=HVDROXOSSOMRJJER20210709063816; VL_CM_0=%7B%22Items%22%3A%5B%7B%22K%22%3A%22VL_LastPageViewTime%22%2C%22V%22%3A%222021-07-09%252006%253A38%253A52%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22VL_LastPVTimeForTD%22%2C%22V%22%3A%222021-07-09%252006%253A38%253A52%22%2C%22E%22%3A%222021-07-09%2007%3A08%3A52%22%7D%2C%7B%22K%22%3A%22VL_TotalDuration%22%2C%22V%22%3A%2237%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22VL_FirstVisitTime%22%2C%22V%22%3A%222021-07-09%252006%253A38%253A16%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A16%22%7D%2C%7B%22K%22%3A%22VL_TotalPV%22%2C%22V%22%3A%223%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22VL_PVCountInVisit%22%2C%22V%22%3A%223%22%2C%22E%22%3A%222021-07-09%2007%3A08%3A52%22%7D%2C%7B%22K%22%3A%22VL_VisitStartTime%22%2C%22V%22%3A%222021-07-09%252006%253A38%253A16%22%2C%22E%22%3A%222021-07-09%2007%3A08%3A16%22%7D%2C%7B%22K%22%3A%22VL_TotalVisit%22%2C%22V%22%3A%221%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A16%22%7D%2C%7B%22K%22%3A%22OfferMiner_ID%22%2C%22V%22%3A%22HVDROXOSSOMRJJER20210709063816%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A16%22%7D%2C%7B%22K%22%3A%22OM_INW%22%2C%22V%22%3A%221%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A16%22%7D%2C%7B%22K%22%3A%22OMB_New%22%2C%22V%22%3A%221%22%2C%22E%22%3A%222021-07-09%2007%3A08%3A52%22%7D%2C%7B%22K%22%3A%22OM_OSS%22%2C%22V%22%3A%22undefined%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22OM_rDomain%22%2C%22V%22%3A%22https%253A%252F%252Fwww.vatanbilgisayar.com%252Farama%252Faoc%2520c24g1%252F%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22VLTVisitorC%22%2C%22V%22%3A%22%257B%2522data%2522%253A%257B%257D%257D%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%2C%7B%22K%22%3A%22VLTB_ABTestC%22%2C%22V%22%3A%22%257B%2522ab%2522%253A%255B%255D%252C%2522sp%2522%253A%255B%255D%257D%22%2C%22E%22%3A%222023-06-29%2006%3A38%3A52%22%7D%5D%7D",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "service-worker-navigation-preload": "true",
      "upgrade-insecure-requests": "1",
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

        if (isTitleValid !== false) {
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
