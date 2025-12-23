// SATVertex/SATVertex-backend/src/models/About.js

const express = require('express');
const router = express.Router();

const About = require('../models/About');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Blog = require('../models/Blog');
const Experience = require('../models/Experience');
const Testimonial = require('../models/Testimonial');
const Service = require('../models/Service');

const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
} = require('../controllers/crudFactory');

// ABOUT (single record – you can treat as list for now)
router.get('/about', getAll(About));
router.post('/about', protect, adminOnly, createOne(About));
router.put('/about/:id', protect, adminOnly, updateOne(About));
router.delete('/about/:id', protect, adminOnly, deleteOne(About));

// SKILLS
router.get('/skills', getAll(Skill));
router.post('/skills', protect, adminOnly, createOne(Skill));
router.get('/skills/:id', getOne(Skill));
router.put('/skills/:id', protect, adminOnly, updateOne(Skill));
router.delete('/skills/:id', protect, adminOnly, deleteOne(Skill));

// PROJECTS
router.get('/projects', getAll(Project));
router.post('/projects', protect, adminOnly, createOne(Project));
router.get('/projects/:id', getOne(Project));
router.put('/projects/:id', protect, adminOnly, updateOne(Project));
router.delete('/projects/:id', protect, adminOnly, deleteOne(Project));

// BLOGS
router.get('/blogs', getAll(Blog));
router.post('/blogs', protect, adminOnly, createOne(Blog));
router.get('/blogs/:id', getOne(Blog));
router.put('/blogs/:id', protect, adminOnly, updateOne(Blog));
router.delete('/blogs/:id', protect, adminOnly, deleteOne(Blog));

// EXPERIENCE
router.get('/experience', getAll(Experience));
router.post('/experience', protect, adminOnly, createOne(Experience));
router.get('/experience/:id', getOne(Experience));
router.put('/experience/:id', protect, adminOnly, updateOne(Experience));
router.delete('/experience/:id', protect, adminOnly, deleteOne(Experience));

// TESTIMONIALS
router.get('/testimonials', getAll(Testimonial));
router.post('/testimonials', protect, adminOnly, createOne(Testimonial));
router.get('/testimonials/:id', getOne(Testimonial));
router.put('/testimonials/:id', protect, adminOnly, updateOne(Testimonial));
router.delete('/testimonials/:id', protect, adminOnly, deleteOne(Testimonial));

// SERVICES
router.get('/services', getAll(Service));
router.post('/services', protect, adminOnly, createOne(Service));
router.get('/services/:id', getOne(Service));
router.put('/services/:id', protect, adminOnly, updateOne(Service));
router.delete('/services/:id', protect, adminOnly, deleteOne(Service));

module.exports = router;
