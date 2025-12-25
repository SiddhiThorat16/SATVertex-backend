// SATVertex/SATVertex-backend/src/models/Service.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },     // e.g. Full-Stack Development
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    icon: { type: String },                      // optional icon
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
