const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, default: 'Sehas Pathirana' },
    title: { type: String, default: 'Undergraduate Cyber Security Student | Full-Stack Developer' },
    typingRoles: { type: [String], default: ["Undergraduate Cyber Security Student", "Full-Stack Developer", "Flutter & Android Developer", "AI-Powered Project Builder"] },
    aboutMe: { type: String, default: '' },
    heroDesc: { type: String, default: 'Engineering secure, scalable, and user-friendly digital solutions. Combining a strong foundation in Cyber Security with practical Full-Stack and Mobile development expertise.' },
    email: { type: String, default: 'hello@example.com' },
    phone: { type: String, default: '' },
    location: { type: String, default: 'Sri Lanka' },
    socialLinks: {
        github: { type: String, default: 'https://github.com' },
        linkedin: { type: String, default: 'https://linkedin.com' },
        twitter: { type: String, default: '' }
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);
