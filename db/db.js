const { Pool } = require('pg');
const options = require('../config.js');
const pool = new Pool(options);

module.exports = {

  getReviews: function(callback) {
    var hello = 'hello';
    callback(null, hello)
    // pool.query('SELECT * FROM rate_review.reviews LIMIT 5', (err, result) => {
    //   if (err) {
    //     console.log('ERROR FROM DB: err')
    //   } else {
    //     callback(result);
    //   }
    // })
  }

}

