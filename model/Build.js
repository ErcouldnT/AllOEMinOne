const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const buildProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
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
});

const buildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
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
    type: [ buildProductSchema ],
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
    type: [ commentSchema ],
    required: false
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Build = mongoose.model('Build', buildSchema);

module.exports = Build;
