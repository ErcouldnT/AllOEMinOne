const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

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

// TODO: make thoose a single url using URL Params after testing
app.get('/api/hepsiburada/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await hb(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/qp/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await qp(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/amazon/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await amazon(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/inventus/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await inventus(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/itopya/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await itopya(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/mediamarkt/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await mediamarkt(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/sinerji/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await sinerji(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/teknobiyotik/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await teknobiyotik(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/teknosa/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await teknosa(search);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get('/api/vatanbilgisayar/:search', async (req, res, next) => {
  try {
    const { search } = req.params;
    const results = await vatanbilgisayar(search);
    res.json(results);
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
