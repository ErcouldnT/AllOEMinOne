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
const incehesap = async (search) => {
  try {
    // todo url params kullan!
    const url = `https://www.incehesap.com/q/${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.product-list div.product-item').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('div.cur').text().trim() || $element.find('span.cur').text().trim();
      if ($price) {
        const title = $element.find('span.title').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.slice(0, -6).replace(".", ""),
            url: `https://www.incehesap.com${$element.find('a.product-link').attr('href')}`,
            img: `https://www.incehesap.com${$element.find('img').attr('src')}`,
            source: 'incehesap'
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

// Promise.all([incehesap("james donkey ssd")]).then(results => {
//   console.log(results);
// });

module.exports = incehesap;
