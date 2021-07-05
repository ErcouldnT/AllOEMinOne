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
const mediamarkt = async (search) => {
  try {
    const url = `https://www.mediamarkt.com.tr/tr/search.html?query=${search}&searchProfile=onlineshop&channel=mmtrtr`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('ul.products-list li div.product-wrapper').each((i, e) => {
      $element = $(e);
      const $price = $element.find('div.price').text().trim();
      if ($price) {
        const title = $element.find('div.content h2 a').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
          const product = {
            title,
            price: $price.slice(0, -2),
            url: `https://www.mediamarkt.com.tr${$element.find('div.content h2 a').attr('href')}`,
            source: 'mediamarkt'
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

module.exports = mediamarkt;
