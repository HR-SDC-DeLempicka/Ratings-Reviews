const pgp = require('pg-promise')();
const { options } = require('../config.js');

const db = pgp(options);

module.exports = db;