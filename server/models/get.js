const { db } = require('../../db');


module.exports = {
  reviews: async (id) => {
    try {
      let result = await db.query(`
      SELECT
        r.id AS review_id,
        r.product_id AS product_id,
        r.rating AS rating,
        r.date_of AS date_of,
        r.summary AS summary,
        r.body AS body,
        r.recommend AS recommend,
        r.reported AS reported,
        r.reviewer_name AS reviewer_name,
        r.reviewer_email AS reviewer_email,
        r.response AS response,
        r.helpfulness AS helpfulness,
        p.id AS photo_id,
        p.review_p_id AS photo_review_id,
        p.url_Of AS url_of
      FROM rate_review.reviews AS r
      LEFT JOIN rate_review.reviews_photos AS p
      ON p.review_p_id = r.id
      WHERE r.product_id = ${id}`);
    return `Successfully updated ID: ${id}`;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
  reviewsMeta: async (id) => {
    try {
      let result = await db.query(  `SELECT c.product_id, c.name_of, cr.value_of, cr.id, r.rating,
      r.id, r.recommend FROM rate_review.characteristics AS c INNER JOIN
      rate_review.characteristic_reviews AS cr ON c.id = cr.characteristic_id
      INNER JOIN rate_review.reviews AS r ON r.id = cr.review_id WHERE c.product_id=${id} LIMIT 5`);
      return `Successfully updated ID: ${id}`
    } catch(err) {
      console.log(err);
      return err;
    }
  }
};



