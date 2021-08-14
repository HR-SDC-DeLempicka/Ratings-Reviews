const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');
const auth = require('../config.js');
var compression = require('compression')

app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '..', '...')));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})