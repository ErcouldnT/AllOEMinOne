const axios = require('axios');
const cheerio = require('cheerio');
const Selector = require('./Selector');

// Axios things
const getPage = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Cheerio things
const teknosa = async (search) => {
  try {
    const url = `https://www.teknosa.com/arama/?s=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.product__listing div.product-item').each((i, e) => {
      $element = $(e);
      const $price = $element.find('div.product-price.visible-grid-view span.price-tag.new-price').text().trim();
      if ($price) {
        const title = $element.find('div.product-name a span').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split(' ')[0].split(',')[0].replace('.', ''),
            url: `https://www.teknosa.com${$element.find('div.product-name a').attr('href')}`,
            source: 'teknosa'
          };
          products.push(product);
        }
      }
    });
    return products.sort((a, b) => a.price - b.price);
    // console.log(products.length);
  } catch (error) {
    console.log(error);
  }
};

module.exports = teknosa;
