const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// SIGNUP
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'Username already exists' });

    const newUser = new User({ username, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, username }, process.env.JWT_SECRET);
    res.json({ message: 'Signup successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
