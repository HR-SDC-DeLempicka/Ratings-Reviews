const { db } = require('../../db');

module.exports = {
  updateReviewHelpful: async (id) => {
    try {
      let result = db.query(`
      UPDATE
        rate_review.reviews
      SET
        helpfulness = helpfulness + 1
      WHERE id = ${id}`);
      return `Successfully updated ID: ${ID}`;
    } catch(err) {
      console.log(err);
      return err;
    }
  },

  updateReviewReported: async (id) => {
    try {
      let result = await db.query(`
      UPDATE
        rate_review.reviews
      SET
        reported = true
      WHERE id = ${id}`);
      return `Successfully updated ID: ${id}`;
    } catch(err) {
      console.log(err);
      return err;
    }
  },
};