require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug Route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Middleware
const contactAPI = require('./routes/contact');
const projectsAPI = require('./routes/projects');
const authAPI = require('./routes/auth');
const messagesAPI = require('./routes/messages');
const profileAPI = require('./routes/profile');
const skillsAPI = require('./routes/skills');
const experienceAPI = require('./routes/experience');
const educationAPI = require('./routes/education');

app.use('/api/contact', contactAPI);
app.use('/api/projects', projectsAPI);
app.use('/api/auth', authAPI);
app.use('/api/messages', messagesAPI);
app.use('/api/profile', profileAPI);
app.use('/api/skills', skillsAPI);
app.use('/api/experience', experienceAPI);
app.use('/api/education', educationAPI);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Optional: if someone accesses /admin directly, serve an admin UI (if it exists)
// app.use('/admin', express.static(path.join(__dirname, 'public/admin')));

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
});
