const express = require('express');
const router = express.Router();

// Certification data (Moved from script.js)
const certifications = [
    {
        id: 1,
        title: "Introduction to Cyber Security",
        issuer: "Simplilearn SkillUp",
        category: "Security",
        image: "assets/certs/originals/simplilearn_cyber_security.png", 
        verify_url: "assets/certs/upload/SkillUp.pdf",
        original_url: "assets/certs/originals/simplilearn_cyber_security.png"
    },
    {
        id: 2,
        title: "Cybrary Orientation",
        issuer: "Cybrary",
        category: "Security",
        image: "assets/certs/originals/cybrary_orientation.png",
        verify_url: "assets/certs/upload/cybrary-cert-cybrary-orientation-2025.pdf",
        original_url: "assets/certs/originals/cybrary_orientation.png"
    },
    {
        id: 3,
        title: "Offensive Security Operations",
        issuer: "Cybrary",
        category: "Security",
        image: "assets/certs/originals/cybrary_offensive_security.png",
        verify_url: "assets/certs/upload/cybrary-cert-offensive-security-operations.pdf",
        original_url: "assets/certs/originals/cybrary_offensive_security.png"
    },
    {
        id: 4,
        title: "AI Infrastructure: AI Hypercomputer",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_ai_hypercomputer.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_ai_hypercomputer.png"
    },
    {
        id: 5,
        title: "Gemini Image-to-Sheets Hack",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_gemini_hack.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_gemini_hack.png"
    },
    {
        id: 6,
        title: "Tame Your Inbox with AI",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_ai_inbox.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_ai_inbox.png"
    },
    {
        id: 7,
        title: "GDC Air-Gapped Security Operator",
        issuer: "Google Cloud",
        category: "Security",
        image: "assets/certs/originals/google_security_operator.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_security_operator.png"
    },
    {
        id: 8,
        title: "Skills Arcade Trivia Week 4",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_trivia_week4.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_trivia_week4.png"
    },
    {
        id: 9,
        title: "Amplify Exec Voices with AI",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_ai_amplify.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_ai_amplify.png"
    },
    {
        id: 10,
        title: "Personal Feedback Agent",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_feedback_agent.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_feedback_agent.png"
    },
    {
        id: 11,
        title: "Skills Arcade Trivia Week 1",
        issuer: "Google Cloud",
        category: "Cloud & AI",
        image: "assets/certs/originals/google_trivia_week1.png",
        verify_url: "https://www.cloudskillsboost.google/",
        original_url: "assets/certs/originals/google_trivia_week1.png"
    }
];

// GET all certifications
router.get('/', (req, res) => {
    res.json({ success: true, data: certifications });
});

module.exports = router;
