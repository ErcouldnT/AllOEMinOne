/* eslint-disable no-undef */
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
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

// Cheerio things
const amazon = async (search) => {
  try {
    const url = `https://www.amazon.com.tr/s?k=${search}`;
    // TODO: use your own sorter for results
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.s-main-slot div.s-result-item').each((i, e) => {
      $element = $(e);
      const $price = $element.find('span.a-offscreen').text().trim();
      if ($price) {
        const title = $element.find('span.a-size-base-plus').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
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
    return products;
    // .sort((a, b) => a.price - b.price);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

module.exports = amazon;
