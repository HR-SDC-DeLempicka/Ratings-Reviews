const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');
const auth = require('../config.js');
const compression = require('compression');
const db = require('../db/db.js');

app.use(express.json());
app.use(compression());
// app.use(express.static(path.join(__dirname, '..', '')));

app.get('/reviews', (req, res) => {
  db.getReviews((err, results) => {
    if (err) {
      console.log('SERVER ERROR: ', err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})