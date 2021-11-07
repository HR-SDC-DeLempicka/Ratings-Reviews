const { put } = require('../models');

module.exports = {
  updateReviewHelpful: async (req, res ) => {
    try {
      let data = await put.updateReviewHelpful(req.body);
      res.send(data);
    } catch(err) {
      res.status(400).send(err);
    }
  },

  updateReviewReported: async (req, res) => {
    try {
      let data = await put.updateReviewReported(req.body);
      res.send(data);
    } catch(err) {
      res.status(400).send(err);
    }
  },
}