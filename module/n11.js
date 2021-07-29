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
const n11 = async (search) => {
  try {
    // todo url params kullan!
    const url = `https://www.n11.com/arama?q=${search}`;
    const products = [];
    const data = await getPage(url);
    const $ = cheerio.load(data);
    $('ul.clearfix li.column').each((i, e) => {
      const $element = $(e);
      const $price = $element.find('a.newPrice').text().trim();
      if ($price) {
        const title = $element.find('h3.productName').text().trim();
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: $price.split("\n")[0].slice(0, -3).replace(".", ""),
            url: `${$element.find('a.plink').attr('href')}`,
            img: `${$element.find('a.plink img.lazy').attr('data-original')}`,
            source: 'n11'
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

// Promise.all([n11("ryzen 5600")]).then(results => {
//   console.log(results);
// });

module.exports = n11;
