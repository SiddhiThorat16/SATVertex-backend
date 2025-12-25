// SATVertex/SATVertex-backend/src/models/contact.model.js

const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 160,
    },
    subject: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    meta: {
      userAgent: String,
      ip: String,
    },
  },
  { timestamps: true }
)

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
