const storeRouter = require('express').Router();
const Store = require('../models/Store');
const Rating = require('../models/Rating');
const auth = require('../middlewares/auth');

storeRouter.get('/', async (req, res) => {
  const stores = await Store.find();
  const ratings = await Rating.aggregate([
    { $group: { _id: '$storeId', avg: { $avg: '$rating' } } }
  ]);
  const ratingMap = Object.fromEntries(ratings.map(r => [r._id, r.avg]));
  const result = stores.map(s => ({ ...s._doc, avgRating: ratingMap[s._id] || 0 }));
  res.json(result);
});

storeRouter.post('/', auth(['admin']), async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  res.json({ msg: 'Store added' });
});

module.exports = storeRouter;