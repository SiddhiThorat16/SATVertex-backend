// SATVertex/SATVertex-backend/src/controllers/authController.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

// POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// (One-time) Seed default admin user
exports.seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@satvertex.dev' });
    if (existingAdmin) {
      console.log('ℹ️ Admin user already exists');
      return;
    }

    const admin = new User({
      name: 'SATVertex Admin',
      email: 'admin@satvertex.dev',
      password: 'Admin@12345', // change after first login
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Default admin created: admin@satvertex.dev / Admin@12345');
  } catch (err) {
    console.error('❌ Error seeding admin user:', err);
  }
};
