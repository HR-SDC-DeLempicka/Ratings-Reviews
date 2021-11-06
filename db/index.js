const pgp = require('pg');
const { options } = require('../config.js');

const db = pgp(options);

module.exports = db;