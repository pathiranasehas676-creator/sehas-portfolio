const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

const auth = require('../config/authMiddleware');

// GET /api/projects - Fetch all projects for the portfolio
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: projects });
    } catch (err) {
        console.error('Projects API Error:', err);
        res.status(500).json({ success: false, error: 'Server error retrieving projects.' });
    }
});

// POST /api/projects - Add a new project (Protected)
router.post('/', auth, async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json({ success: true, data: project });
    } catch (err) {
        console.error('Create Project Error:', err);
        res.status(500).json({ success: false, error: 'Server error creating project.' });
    }
});

// PUT /api/projects/:id - Update project (Protected)
router.put('/:id', auth, async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, data: project });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

// DELETE /api/projects/:id - Delete project (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Project removed' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server error' });
    }
});

module.exports = router;
