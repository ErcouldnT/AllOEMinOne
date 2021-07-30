const axios = require('axios');
const cheerio = require('cheerio');
const Selector = require('./Selector');

// Axios things
const getPage = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Cheerio things
const trendyol = async (search) => {
  try {
    // todo url params kullan!
    const url = `https://www.trendyol.com/sr?q=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.prdct-cntnr-wrppr div.p-card-wrppr').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('div.prc-box-dscntd').text().trim();
      if ($price) {
        const title = `${$element.find('span.prdct-desc-cntnr-ttl').text().trim()} ${$element.find('span.prdct-desc-cntnr-name').text().trim()}`;
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split(",")[0].replace(".", ""),
            url: `https://www.trendyol.com${$element.find('a').attr('href')}`.split("?")[0],
            // todo img: you need to use puppeteer to get lazy data.
            // img: $element.find('img').attr('src'),
            source: 'trendyol'
          };
          products.push(product);
        }
      }
    });
    return products.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.log(error);
  }
};

// Promise.all([trendyol("ryzen 5600")]).then(results => {
//   console.log(results);
// });

module.exports = trendyol;
