const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../config/authMiddleware');

// GET /api/profile - Fetch profile info
router.get('/', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            // Create default if none exists
            profile = await Profile.create({});
        }
        res.json({ success: true, data: profile });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// PUT /api/profile - Update profile info (Protected)
router.put('/', auth, async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            profile = await Profile.create(req.body);
        } else {
            profile = await Profile.findByIdAndUpdate(profile._id, req.body, { new: true });
        }
        res.json({ success: true, data: profile });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
