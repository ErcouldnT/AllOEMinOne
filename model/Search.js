const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  product: {
    type: String,
    unique: true,
    required: true
  },
  connection: {
    type: String,
    required: false
  },
  count: {
    type: Number,
    default: 1
  }
}, {
  timestamps: true
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
