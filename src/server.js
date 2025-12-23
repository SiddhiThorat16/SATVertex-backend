const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static('uploads'));

// Routes
const authRoutes = require('./routes/authRoutes');
const { seedAdmin } = require('./controllers/authController');

// ✅ NEW: content routes import
const contentRoutes = require('./routes/contentRoutes');

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected - SATVertex CMS');

    // Seed default admin once
    await seedAdmin();
  })
  .catch((err) => console.error('❌ MongoDB Error:', err));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'SATVertex CMS Backend OK ✅',
    db: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Auth
app.use('/api/auth', authRoutes);

// Protected test route
const { protect, adminOnly } = require('./middleware/authMiddleware');

app.get('/api/admin-only', protect, adminOnly, (req, res) => {
  res.json({ message: 'You are an admin!', user: req.user });
});

// ✅ Mount CMS content routes (About, Skills, Projects, etc.)
app.use('/api', contentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 SATVertex Backend running: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
