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
const pttavm = async (search) => {
  try {
    // todo url params kullan!
    const url = `https://www.pttavm.com/arama?q=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.flex.flex-row.flex-wrap a.product-list-box').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('div.price-box-price').text().trim();
      if ($price) {
        const title = $element.find('span.product-list-box-container-info-name').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.slice(0, -6).replace(".", ""),
            url: `https://www.pttavm.com${$element.attr('href')}`.split("?")[0],
            // todo img: puppeteer
            // img: $element.find('img.product-list-box-container-slider-item').attr('src'),
            source: 'pttavm'
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

// Promise.all([pttavm("ryzen 5600")]).then(results => {
//   console.log(results);
// });

module.exports = pttavm;
