const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },
  photoUrl: { type: String }, 
}, {
  timestamps: true, 
});

module.exports = mongoose.model('Product', ProductSchema);