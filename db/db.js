const { Pool } = require('pg');
const pool = new Pool( {
  host: 'localhost',
  user: 'sam',
  database: 'review',
  port: 5432
});