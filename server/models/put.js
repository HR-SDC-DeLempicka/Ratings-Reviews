const { pool } = require('../../db');

module.exports = {

  updateReviewHelpful: function(id, callback) {
    return pool.query(`UPDATE rate_review.reviews SET helpfulness =
    helpfulness + 1 WHERE id = ${id}`, err => {
      if (err) {
        console.log('DATABASE ERROR; ', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  updateReviewReported: function(id, callback) {
    return pool.query(`UPDATE rate_review.reviews SET reported = true
    WHERE id = ${id}`, err => {
      if (err) {
        console.log('DATABASE ERROR: ', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  },
}