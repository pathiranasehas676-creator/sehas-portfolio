const express = require('express');
const router = express.Router();
const Education = require('../models/Education');
const auth = require('../config/authMiddleware');

// GET /api/education
router.get('/', async (req, res) => {
    try {
        const edu = await Education.find();
        res.json({ success: true, data: edu });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// POST /api/education (Protected)
router.post('/', auth, async (req, res) => {
    try {
        const edu = await Education.create(req.body);
        res.status(201).json({ success: true, data: edu });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// DELETE /api/education/:id (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Education removed' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
