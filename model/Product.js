const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  prices: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product,
  productSchema
};
