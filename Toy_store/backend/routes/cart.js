const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Toy = require('../models/Toy');
const { auth } = require('../middleware/auth');

// Get cart
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.toy');
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { toyId, quantity } = req.body;
    const user = await User.findById(req.user._id);
    const toy = await Toy.findById(toyId);

    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }

    if (toy.stock < quantity) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }

    const cartItem = user.cart.find(item => item.toy.toString() === toyId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      user.cart.push({ toy: toyId, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update cart item quantity
router.put('/update/:toyId', auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const user = await User.findById(req.user._id);
    const toy = await Toy.findById(req.params.toyId);

    if (!toy) {
      return res.status(404).json({ error: 'Toy not found' });
    }

    if (toy.stock < quantity) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }

    const cartItem = user.cart.find(item => item.toy.toString() === req.params.toyId);
    if (!cartItem) {
      return res.status(404).json({ error: 'Item not in cart' });
    }

    cartItem.quantity = quantity;
    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove from cart
router.delete('/remove/:toyId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.cart = user.cart.filter(item => item.toy.toString() !== req.params.toyId);
    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Checkout
router.post('/checkout', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.toy');
    
    // Calculate total
    const total = user.cart.reduce((sum, item) => {
      return sum + (item.toy.price * item.quantity);
    }, 0);

    // Check stock and update
    for (const item of user.cart) {
      const toy = await Toy.findById(item.toy._id);
      if (toy.stock < item.quantity) {
        return res.status(400).json({ error: `Not enough stock for ${toy.name}` });
      }
      toy.stock -= item.quantity;
      await toy.save();
    }

    // Clear cart
    user.cart = [];
    await user.save();

    res.json({
      message: 'Checkout successful',
      total,
      orderId: new Date().getTime().toString()
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 