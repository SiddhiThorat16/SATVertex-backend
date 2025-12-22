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

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB Connected - SATVertex CMS');
    // TEMP: create a test collection & document
    const Test = mongoose.model('Test', new mongoose.Schema({ name: String }), 'test');
    await Test.create({ name: 'init' });
    console.log('📝 Created test document in satvertex DB');
  })
  .catch(err => console.error('❌ MongoDB Error:', err));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'SATVertex CMS Backend OK ✅',
    db: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// API placeholder
app.get('/api', (req, res) => {
  res.json({ message: 'SATVertex CMS APIs - Day 2 coming soon!' });
});

app.listen(PORT, () => {
  console.log(`🚀 SATVertex Backend running: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
