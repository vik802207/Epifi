const router = require('express').Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');


router.post('/', auth, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ id: product._id, message: "Product added" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put('/:id/quantity', auth, async (req, res) => {
  const { quantity } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: { quantity } },
      { new: true }
    );
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/', auth, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(products);
});

module.exports = router;
