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
const teknobiyotik = async (search) => {
  try {
    const url = `https://www.teknobiyotik.com/catalogsearch/result/?q=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('div.category-products ul.products-grid li.item').each((i, e) => {
      $element = $(e);
      const $price = $element.find('p.special-price').text().trim();
      if ($price) {
        const title = $element.find('h3.product-name a').attr('title').trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split('\n')[2].split('₺')[0].trim().split(',')[0].replace('.', ''),
            url: $element.find('h3.product-name a').attr('href'),
            source: 'teknobiyotik'
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

module.exports = teknobiyotik;
