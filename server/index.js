const express = require('express');
const app = express();
const router = require('./routes.js');
const Router = express.Router();
const port = 3000;
const auth = require('../config.js');
const compression = require('compression');
// const db = require('../db/db.js');
app.use(express.json());
app.use(compression());
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);
  next();
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// app.post('/reviews', (req, res) => {

//   db.addReview(req.body, err => {
//     if (err) {
//       console.log('SERVER ERROR: ', err);
//     } else {
//       console.log('REVIEW ADDED!');
//       res.send('REVIEW ADDED!');
//     }
//   })
// });
