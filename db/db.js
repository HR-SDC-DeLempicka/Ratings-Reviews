const { Pool } = require('pg');
const {options} = require('../config.js');
const pool = new Pool(options);
console.log(options);
module.exports = {

  getReviews: function(id, callback) {
    return pool.query( `SELECT r.id AS review_id, r.product_id AS product_id, r.rating AS rating,
    r.date_of AS date_of, r.summary AS summary, r.body AS body, r.recommend AS
    recommend, r.reported AS reported, r.reviewer_name AS reviewer_name,
    r.reviewer_email AS reviewer_email, r.response AS response, r.helpfulness
    AS helpfulness, p.id AS photo_id, p.review_p_id AS photo_review_id, p.url_Of
    AS url_of FROM rate_review.reviews AS r LEFT JOIN rate_review.reviews_photos
    AS p ON p.review_p_id = r.id WHERE r.product_id = ${id}`, (err, result) => {
      if (err) {
        console.log('ERROR FROM DB: ', err)
      } else {
        callback(null, result.rows);
      }
    });
  },

  //USE SCP TO UPLOAD CSV'S TO AWS

    // ` SELECT reviews.id AS review_id, reviews.rating, reviews.date_of, reviews.summary,
    // reviews.body, reviews.recommend, reviews.reviewer_name, reviews.response, reviews.helpfulness,
    // json_agg(json_build_object('id', rate_review.reviews_photos.id, 'url', rate_review.reviews_photos.url_Of)) AS photos FROM rate_review.reviews LEFT JOIN
    // rate_review.reviews_photos ON rate_review.reviews_photos.review_p_id = reviews.id
    // WHERE
    // reviews.product_id = ${id} AND reviews.reported = false
    // GROUP BY
    // reviews.id;
    // `

  getReviewsMeta: function(id, callback) {
    return pool.query(  `SELECT c.product_id, c.name_of, cr.value_of, cr.id, r.rating,
    r.id, r.recommend FROM rate_review.characteristics AS c INNER JOIN
    rate_review.characteristic_reviews AS cr ON c.id = cr.characteristic_id
    INNER JOIN rate_review.reviews AS r ON r.id = cr.review_id WHERE c.product_id=${id} LIMIT 5`, (err, result) => {
      if (err) {
        console.log('ERROR FROM DB: ', err)
      } else {
        callback(null, result.rows);
      }
    });
  },





  // `WITH char_ins AS (
  //   SELECT c.product_id, c.name_of
  //   FROM rate_review.characteristics AS c
  //   WHERE c.product_id = ${id} RETURNING c.id
  //   ),
  //   char_review_ins AS (
  //     SELECT cr.value_of, cr.review_id, cr._characteristic_id
  //     FROM rate_review.characteristic_reviews AS cr
  //     WHERE c.id = cr.characteristic_id
  //     RETURNING cr.review_id AS cr.r_id
  //   ),
  //   review_ins AS (
  //     SELECT r.recommend, r.rating, r.product_id FROM
  //     rate_review.reviews AS r
  //     WHERE r.id = cr.r_id
  //   )`
  // )`

  updateReviewHelpful: function(id, callback) {
    console.log(id);
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
    console.log(id);
    return pool.query(`UPDATE rate_review.reviews SET reported = true
    WHERE id = ${id}`, err => {
      if (err) {
        console.log('DATABASE ERROR: ', err);
        callback(err);
      } else {
        callback(null);
      }
    })
  },

  // addReview: async function(data) {
  //   const { product_id, rating, date, summary, body, recommend,
  //     reviewer_name, reviewer_email, photos, characteristics } = data;
  //   const photoInsert = photos => {

  //   }
  //   try {
  //    const reviewId = await pool.query(
  //       `WITH review_ins AS (
  //         INSERT INTO rate_review.reviews(product_id, rating, date_of, summary
  //           body, recommend, reviewer_name, reviewer_email)
  //           VALUES (${product_id}, ${rating}, ${date}, ${summary}, ${body}, ${recommend},
  //             ${reviewer_name}, ${reviewer_email}, ${helpfulness}) RETURNING id AS review_id),
  //         photo_ins AS (
  //           INSERT INTO rate_review.reviews_photos(review_p_id, url_of)
  //           VALUES (review_id, ${photos[0]}) RETURNING review_id
  //         )`
  //     )

  //     await pool.query(
  //       `WITH characteristics_ins AS (
  //         INSERT INTO rate_review.characteristics(product_id, name_Of)
  //         VALUES (${product_id}, ${'Fit'}), (${product_id}, ${'Size'}), (${product_id}, ${'Quality'}),
  //         (${product_id}, ${'Length'}), (${product_id}, ${'Comfort'}), (${product_id}, ${'Width'})
  //         RETURNING id AS characteristics_id,
  //         char_reviews AS (
  //           INSERT INTO rate_review.characteristic_reviews(
  //             characteristic_id, review_id, value) VALUES (characteristics_id,
  //               ${reviewId}, ${characteristics[characteristics_id]})
  //           )
  //         )
  //         )`
  //     ) `select characteristics.id FROM characteristics WHERE product.id = ${product.id'}`
  //   }
  //   finally {}

  // }

}


// SELECT c.id AS characteristics_id, c.product_id AS product_id, c.name AS name,
// cr.id AS char_review_id, cr.characteristic_id AS characteristic_id,
// cr.review_id AS review_char_id, cr.value AS value, r.product_id AS rev_product_id,
// r.recommend AS rev_recommend FROM
// join three tables

//when data is returned, need to count amount of false and true for recommended and return the value for each
// as properties 0, and 1
