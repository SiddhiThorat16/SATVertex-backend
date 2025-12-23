// SATVertex/SATVertex-backend/src/models/Testimonial.js

const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String },         // e.g. Client, Colleague
    company: { type: String },
    avatarUrl: { type: String },
    quote: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
