const axios = require('axios');
const Selector = require('./Selector');

// Get data
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

// Make it understandable
const mediamarkt = async (search) => {
  try {
    const url = `https://www.mediamarkt.com.tr/FACT-Finder/Suggest.ff?searchProfile=onlineshop&channel=mmtrtr&query=${search}`;
    const products = [];
    const data = await getPage(url);
    const allProducts = data.suggestions;
    // console.log(products);

    for (let i = 0; i < allProducts.length; i++) {
      const e = allProducts[i];
      const price = e.attributes.currentprice;
      if (price) {
        const title = e.name.trim();
        const isTitleValid = Selector(title, search);
        if (isTitleValid) {
          const product = {
            title,
            price: price.slice(0, -3),
            url: "https://www.mediamarkt.com.tr/tr/product/_" + `${e.name}-${e.attributes.modelnumber}.html`.toLowerCase().replace(/(\s|\/)/g, "-"),
            source: 'mediamarkt'
          }
          products.push(product);
        }
      }
    }
    
    return products.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.log(error);
  }
};

// Promise.all([mediamarkt("logitech g203")]).then(results => {
//   console.log(results);
// });

module.exports = mediamarkt;
