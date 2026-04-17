const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../config/authMiddleware');

// GET /api/skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json({ success: true, data: skills });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// POST /api/skills (Protected)
router.post('/', auth, async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(201).json({ success: true, data: skill });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// DELETE /api/skills/:id (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Skill removed' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
