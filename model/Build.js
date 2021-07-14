const mongoose = require('mongoose');
const { productSchema } = require('./Product')

const buildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    unique: true,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    required: false
  },
  locked: {
    type: Boolean,
    default: false
  },
  build: {
    type: [ productSchema ],
    required: true
  },
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  },
  comments: {
    type: String,
    required: false
  },
  views: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});

const Build = mongoose.model('Build', buildSchema);

module.exports = Build;
