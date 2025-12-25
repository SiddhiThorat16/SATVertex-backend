// SATVertex/SATVertex-backend/src/routes/contact.routes.js

const express = require('express')
const {
  createContactMessage,
  getContactMessages
} = require('../controllers/contact.controller')
const { protect, adminOnly } = require('../middleware/authMiddleware')

const router = express.Router()

// Public: portfolio contact form submits here
router.post('/', createContactMessage)

// Admin-only: SATVertex-frontend reads stored messages here
router.get('/', protect, adminOnly, getContactMessages)

module.exports = router
