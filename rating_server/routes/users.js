const userRouter = require('express').Router();
const User = require('../models/User');
const auth = require('../middlewares/auth');

userRouter.get('/', auth(['admin']), async (req, res) => {
  const users = await User.find();
  res.json(users);
});

userRouter.put('/password', auth(), async (req, res) => {
  const { password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(req.user.id, { password: hashed });
  res.json({ msg: 'Password updated' });
});

module.exports = userRouter;