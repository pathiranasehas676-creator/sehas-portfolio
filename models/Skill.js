const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Core Domains', 'Programming & Languages', 'Mobile Development', 'Web & Frontend', 'Backend & Databases', 'APIs & Integration', 'Tools & Platforms', 'Soft + Practical Skills'], required: true },
    icon: { type: String, default: 'fa-solid fa-code' }
});

module.exports = mongoose.model('Skill', SkillSchema);
