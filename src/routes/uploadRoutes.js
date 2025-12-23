// SATVertex/SATVertex-backend/src/utils/multerConfig.js

const express = require('express');
const router = express.Router();

const upload = require('../utils/multerConfig');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// POST /api/upload/image
router.post(
  '/image',
  protect,
  adminOnly,
  upload.single('image'), // form field name = "image"
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Public URL to access file
    const fileUrl = `/uploads/${req.file.filename}`;

    res.status(201).json({
      message: 'Image uploaded successfully',
      fileName: req.file.filename,
      url: fileUrl
    });
  }
);

module.exports = router;
