const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true }, // e.g., '2023 - Present'
    description: [String], // Array of bullet points
    type: { type: String, default: 'Internship' } // e.g., 'Full-time', 'Internship'
});

module.exports = mongoose.model('Experience', ExperienceSchema);
