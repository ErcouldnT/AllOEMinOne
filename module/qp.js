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
const qp = async (search) => {
  try {
    const url = `https://www.qp.com.tr/search/${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('ol.products li.product').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('span.price').text().trim();
      if ($price) {
        const title = $element.find('a.product-item-link').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split(",")[0].replace(".", ""),
            url: `${$element.find('a.product-item-link').attr('href')}`,
            source: 'qp'
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

// Promise.all([qp("ryzen 5600")]).then(results => {
//   console.log(results);
// });

module.exports = qp;
