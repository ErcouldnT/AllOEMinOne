const axios = require('axios');
const cheerio = require('cheerio');
const Selector = require('./Selector');

// Axios things
const getPage = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
        'Accept-Language': 'tr-TR,tr;'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Cheerio things
const vatanbilgisayar = async (search) => {
  try {
    const url = `https://www.vatanbilgisayar.com/arama/${search}/?srt=UP`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
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
    return products.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.log(error);
  }
};

module.exports = vatanbilgisayar;
