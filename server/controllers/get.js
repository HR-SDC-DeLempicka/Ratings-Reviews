const { get } = require('../models');

module.exports = {
  reviews: async (req, res) => {
    try {
      let data = await get.reviews(req.headers.id);
      res.status(200).json(data);
    } catch(err) {
      res.status(400).send(err);
    }
  },

  reviewsMeta: async (req, res ) => {
    try {
      let data = await get.reviewsMeta(req.headers.id);
      res.status(200).json(data);
    } catch(err) {
      res.status(400).send(err);
    }
  },
}