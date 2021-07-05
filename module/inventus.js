const axios = require('axios');
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

// Edit api call
const inventus = async (search) => {
  try {
    const url = `https://inventus.com.tr/autocompleteProducts.ashx?term=${search}`;
    const products = [];
    const data = await getPage(url);
    data.forEach((e) => {
      if (e.listefiyati !== 'Tedarik Edilemiyor') {
        const title = e.model.replace(/<[^>]*>/g, '');
        const isTitleValid = Selector(title, search);

        if (isTitleValid !== false) {
          const product = {};
          product.title = title;
          product.price = e.listefiyati.split('TL')[0].split(',')[0];
          product.url = `https://inventus.com.tr/mi_products/Product.aspx?pid=${e.pid}`;
          product.source = 'inventus';
          products.push(product);
        }
      }
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

module.exports = inventus;
