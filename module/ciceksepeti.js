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

// Not Cheerio things
const ciceksepeti = async (search) => {
  try {
    // todo url params kullan!
    const url = `https://www.ciceksepeti.com/Suggest/Get?key=${search}`;
    const products = [];
    const data = await getPage(url);
    const list = data.Productlist;
    // console.log(list);
    list.forEach(p => {
      const price = p.TotalPrice;
      if (price) {
        const title = p.Name;
        const isTitleValid = Selector(title, search);

        if (isTitleValid) {
          const product = {
            title,
            price: price.split(",")[0],
            url: `https://www.ciceksepeti.com/${p.Deeplink}`.split("?")[0],
            img: p.ImageURL,
            source: 'ciceksepeti'
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

// Promise.all([ciceksepeti("ryzen 3600")]).then(results => {
//   console.log(results);
// });

module.exports = ciceksepeti;
