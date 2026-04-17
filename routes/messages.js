const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../config/authMiddleware');

// GET /api/messages - Fetch all messages (Protected)
router.get('/', auth, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json({ success: true, data: messages });
    } catch (err) {
        console.error('Fetch Messages Error:', err);
        res.status(500).json({ success: false, error: 'Server error retrieving messages.' });
    }
});

// PATCH /api/messages/:id - Mark as read (Protected)
router.patch('/:id', auth, async (req, res) => {
    try {
        const message = await Message.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
        res.json({ success: true, data: message });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error updating message.' });
    }
});

// DELETE /api/messages/:id - Delete message (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Message deleted' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error deleting message.' });
    }
});

module.exports = router;
