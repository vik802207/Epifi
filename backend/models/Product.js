const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: { type: String, unique: true },
  image_url: String,
  description: String,
  quantity: Number,
  price: Number
}, { timestamps: true });

module.exports = mongoose.model('Productnaya', ProductSchema);
