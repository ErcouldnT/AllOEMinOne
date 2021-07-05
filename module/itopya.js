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
const itopya = async (search) => {
  try {
    const url = `https://www.itopya.com/arama/?o=far&a=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
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
    return products.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.log(error);
  }
};

module.exports = itopya;
