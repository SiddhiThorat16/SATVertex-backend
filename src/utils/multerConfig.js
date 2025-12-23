// SATVertex/SATVertex-backend/src/utils/multerConfig.js

const multer = require('multer');
const path = require('path');

// Where to store files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // already served statically in server.js
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // keep original extension
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, '-');
    cb(null, `${baseName}-${Date.now()}${ext}`);
  }
});

// Basic file filter (images only; adjust if needed)
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp|gif/;
  const isMimeOk = allowed.test(file.mimetype);
  const isExtOk = allowed.test(path.extname(file.originalname).toLowerCase());

  if (isMimeOk && isExtOk) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpeg, jpg, png, webp, gif)'));
  }
};

// Max file size: 5 MB
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter
});

module.exports = upload;
