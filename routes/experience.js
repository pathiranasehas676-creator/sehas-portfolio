const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const auth = require('../config/authMiddleware');

// GET /api/experience
router.get('/', async (req, res) => {
    try {
        const exp = await Experience.find().sort({ period: -1 });
        res.json({ success: true, data: exp });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// POST /api/experience (Protected)
router.post('/', auth, async (req, res) => {
    try {
        const exp = await Experience.create(req.body);
        res.status(201).json({ success: true, data: exp });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// DELETE /api/experience/:id (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Experience removed' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
