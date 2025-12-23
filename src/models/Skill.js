// SATVertex/SATVertex-backend/src/models/Skill.js

const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, default: 'Intermediate' }, // Beginner / Intermediate / Advanced
    category: { type: String },                        // e.g. Frontend, Backend
    icon: { type: String }                             // optional icon classname/url
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
