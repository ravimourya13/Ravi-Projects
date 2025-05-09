const express = require('express');
const router = express.Router();
const Toy = require('../models/Toy');
const { auth } = require('../middleware/auth');

// Get all toys
router.get('/', async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get toy by ID
router.get('/:id', async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }
    res.json(toy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create toy (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }

    const toy = new Toy(req.body);
    await toy.save();
    res.status(201).json(toy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update toy (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }

    const toy = await Toy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }
    res.json(toy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete toy (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }

    const toy = await Toy.findByIdAndDelete(req.params.id);
    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }
    res.json({ message: 'Toy deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add review to toy
router.post('/:id/reviews', auth, async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }

    const { rating, comment } = req.body;
    toy.reviews.push({
      user: req.user._id,
      rating,
      comment
    });

    // Update average rating
    const totalRating = toy.reviews.reduce((sum, review) => sum + review.rating, 0);
    toy.rating = totalRating / toy.reviews.length;

    await toy.save();
    res.json(toy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 