const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  price: String  // change this to 'int' later
});

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  prices: {
    type: [ priceSchema ],
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
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
