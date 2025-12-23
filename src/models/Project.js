// SATVertex/SATVertex-backend/src/models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    thumbnailUrl: { type: String },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
