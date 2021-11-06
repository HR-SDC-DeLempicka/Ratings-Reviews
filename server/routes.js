const controller = require('./controllers');
const router = require('express').Router();

router.get('/reviews', controller.get.reviews);
router.get('/reviews/meta', controller.get.reviewsMeta);