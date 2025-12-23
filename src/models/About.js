// SATVertex/SATVertex-backend/src/models/About.js

const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    subheading: { type: String },
    description: { type: String, required: true },
    avatarUrl: { type: String },   // image URL from /uploads or cloud
    highlightPoints: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
