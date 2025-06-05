const ratingRouter = require('express').Router();
const Rating = require('../models/Rating');
const auth = require('../middlewares/auth');

ratingRouter.post('/', auth(['user']), async (req, res) => {
  const { storeId, rating } = req.body;
  try {
    const newRating = await Rating.findOneAndUpdate(
      { storeId, userId: req.user.id },
      { rating },
      { upsert: true, new: true }
    );
    res.json(newRating);
  } catch (err) {
    res.status(400).json({ msg: 'Error submitting rating' });
  }
});

module.exports = ratingRouter;
