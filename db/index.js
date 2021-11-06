const { Pool } = require('pg');
const {options} = require('../config.js');

const pool = new Pool(options);

module.exports = pool;