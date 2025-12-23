// SATVertex/SATVertex-backend/src/models/Experience.js

const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },       // null → current
    current: { type: Boolean, default: false },
    description: { type: String },
    highlights: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
