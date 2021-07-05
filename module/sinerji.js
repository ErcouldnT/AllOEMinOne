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
const sinerji = async (search) => {
  try {
    const url = `https://www.sinerji.gen.tr/${search}-s?sx=PriceAsc`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('section.row.productList div').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('article div div span.price').text().trim();
      if ($price) {
        const title = $element.find('article div.title a').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
          const product = {
            title,
            price: $price.split('\n')[1].replace('.', ''),
            url: `https://www.sinerji.gen.tr${$element.find('article div.title a').attr('href')}`,
            source: 'sinerji'
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

module.exports = sinerji;
