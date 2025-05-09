const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Toy = require('../models/Toy');
const { adminAuth } = require('../middleware/auth');

// Get admin info
router.get('/info', async (req, res) => {
  try {
    const admin = await User.findOne({ isAdmin: true }).select('-password');
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get dashboard stats (admin only)
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ isAdmin: false });
    const totalToys = await Toy.countDocuments();
    const totalStock = await Toy.aggregate([
      { $group: { _id: null, total: { $sum: '$stock' } } }
    ]);

    const lowStockToys = await Toy.find({ stock: { $lt: 10 } });

    res.json({
      totalUsers,
      totalToys,
      totalStock: totalStock[0]?.total || 0,
      lowStockToys
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users (admin only)
router.get('/users', adminAuth, async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 