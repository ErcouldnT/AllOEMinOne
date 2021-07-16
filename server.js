const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();

const Product = require('./model/Product');
const Search = require('./model/Search');
const Build = require('./model/Build');

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Mongo connected!');
});

process.setMaxListeners(Infinity);

const hb = require('./module/hepsiburada');
const amazon = require('./module/amazon');
const inventus = require('./module/inventus');
const itopya = require('./module/itopya');
const mediamarkt = require('./module/mediamarkt');
const sinerji = require('./module/sinerji');
const teknobiyotik = require('./module/teknobiyotik');
const teknosa = require('./module/teknosa');
const vatanbilgisayar = require('./module/vatanbilgisayar');
const qp = require('./module/qp');

const client = path.resolve('client', 'build');

app.use(cors());
app.use(express.static(client));
app.use(express.json());
app.enable('trust proxy');

// Post search
app.get('/api/search/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const searching = search.trim().toLowerCase();
    const isFound = await Search.findOne({ product: searching });

    if (isFound) {
      isFound.count = isFound.count += 1;
      isFound.save();
    } else {
      const product = await new Search({
        product: searching
      });
      await product.save();
    };

    res.sendStatus(200);
    // res.json({
    //   message: `Search term '${search}' is added.`
    // });
  } catch (error) {
    next(error);
  }
});

// Get product
app.get('/api/product/:url', async (req, res, next) => {
  try {
    const { url } = req.params;
    const product = await Product.findOne({ url: url });
    if (product) {
      res.json(product);
    } else {
      res.json({
        message: "Product not found."
      });
    }
  } catch (error) {
    next(error);
  }
});

// Get build
app.get('/api/build/:slug', async (req, res, next) => {
  try {
    const { slug } = req.params;
    const build = await Build.findOne({ slug: slug });
    if (build) {
      //TODO: Don't tell pw if there is...
      build.views += 1;
      res.json(build);
      build.save();
    } else {
      res.json({
        owner: "Olmayan",
        name: "Baba! Sistem yok!",
        build: [],
        message: "Slug not found."
      });
    }
  } catch (error) {
    next(error);
  }
});

// Post build
app.post('/api/build', async (req, res, next) => {
  try {
    const build = new Build(req.body);
    const isFound = await Build.findOne({ slug: build.slug });
    if (isFound) {
      res.json({
        message: "Use another slug."
      });
    } else {
      await build.save();
      res.json(build);
    }
  } catch (error) {
    next(error);
  }
});

const SaveDB = (array) => {
  array.forEach(async p => {
    const isFound = await Product.findOne({ url: p.url });
    if (isFound) {
      // todo img yoksa image eklesin.
      if (isFound.prices[isFound.prices.length - 1].price !== p.price) {
        isFound.prices.push({
          price: p.price
        });
        await isFound.save();
      }
      return
    } else {
      const product = new Product(p);
      product.prices = {
        price: p.price
      };
      await product.save();
    }
  });
};

// TODO: make thoose a single url using URL Params after testing
app.get('/api/hepsiburada/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await hb(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/qp/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await qp(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/amazon/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await amazon(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/inventus/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await inventus(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/itopya/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await itopya(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/mediamarkt/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await mediamarkt(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/sinerji/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await sinerji(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/teknobiyotik/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await teknobiyotik(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/teknosa/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await teknosa(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/vatanbilgisayar/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await vatanbilgisayar(search);
    res.json(results);
    SaveDB(results);
  } catch (error) {
    next(error);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(client, 'index.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
  const host = 'localhost';
  const port = server.address().port;
  console.log(`Server is up at http://${host}:${port}`);
});
