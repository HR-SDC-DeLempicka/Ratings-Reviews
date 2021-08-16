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
  req.header.id = 17132;
  db.getReviews(req.header.id, (err, results) => {
    if (err) {
      console.log('SERVER ERROR: ', err);
    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/reviews/meta', (req, res) => {
  req.header.id = 17121;
  db.getReviewsMeta(req.header.id, (err, result) => {
    if (err) {
      console.log('SERVER ERROR; ', err);
    } else {
      res.status(200).send(result)
    }
  })
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  req.params.review_id = 1;
  db.updateReviewHelpful( req.params.review_id, err => {
    if (err) {
      console.log('SERVER ERROR: ', err);
    } else {
      console.log('Updated review!');
      res.send('UPDATED!');
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})