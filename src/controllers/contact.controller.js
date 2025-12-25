// SATVertex/SATVertex-backend/src/controllers/contact.controller.js

const Contact = require('../models/contact.model')

const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {}

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: 'Name, email and message are required.' })
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      meta: {
        userAgent: req.headers['user-agent'],
        ip:
          req.headers['x-forwarded-for'] ||
          req.connection?.remoteAddress ||
          req.ip,
      },
    })

    return res.status(201).json({
      message: 'Message stored successfully.',
      id: contact._id,
    })
  } catch (error) {
    console.error('Error creating contact message:', error)
    return res.status(500).json({ message: 'Failed to store message.' })
  }
}

const getContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).lean()
    res.json({
      messages,
      total: messages.length
    })
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    res.status(500).json({ message: 'Failed to fetch messages.' })
  }
}

module.exports = { createContactMessage, getContactMessages }
