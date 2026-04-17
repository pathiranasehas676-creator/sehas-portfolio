require('dotenv').config();
const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Education = require('../models/Education');

const seed = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
        await mongoose.connect(uri);
        console.log('🌱 Seeding database with CV information...');

        // Clear existing
        await Profile.deleteMany({});
        await Skill.deleteMany({});
        await Project.deleteMany({});
        await Experience.deleteMany({});
        await Education.deleteMany({});

        await Profile.create({
            name: 'Sehas Pathirana',
            title: 'Cyber Security Student | Full-Stack Developer',
            typingRoles: ["Cyber Security Student", "Full-Stack Developer", "Flutter & Android Developer", "AR Platform Creator"],
            heroDesc: 'Motivated Cyber Security undergraduate with a passion for building secure and innovative solutions.',
            aboutMe: 'I am a motivated Cyber Security undergraduate with a proven track record in developing secure mobile and web applications. My expertise spans across Flutter, Android, and Full-Stack development, with a strong focus on cybersecurity principles and secure architecture.',
            email: 'pathiranasehas988@gmail.com',
            phone: '+94 774245205',
            location: 'Homagama, Sri Lanka',
            socialLinks: {
                github: 'https://github.com/pathiranasehas676-creator',
                linkedin: 'https://linkedin.com'
            }
        });

        const skills = [
            // Programming
            { name: 'Flutter', category: 'Programming & Languages', icon: 'fa-solid fa-mobile-screen' },
            { name: 'Android (Java/Kotlin)', category: 'Programming & Languages', icon: 'fa-brands fa-android' },
            { name: 'Node.js', category: 'Programming & Languages', icon: 'fa-brands fa-node-js' },
            { name: 'Express', category: 'Programming & Languages', icon: 'fa-solid fa-server' },
            
            // Web
            { name: 'HTML5', category: 'Web & Frontend', icon: 'fa-brands fa-html5' },
            { name: 'CSS3', category: 'Web & Frontend', icon: 'fa-brands fa-css3-alt' },
            { name: 'React', category: 'Web & Frontend', icon: 'fa-brands fa-react' },
            
            // Tools
            { name: 'Firebase', category: 'Tools & Platforms', icon: 'fa-solid fa-fire' },
            { name: 'Git & GitHub', category: 'Tools & Platforms', icon: 'fa-brands fa-github' },
            { name: 'Android Studio', category: 'Tools & Platforms', icon: 'fa-solid fa-keyboard' },
            { name: 'VS Code', category: 'Tools & Platforms', icon: 'fa-solid fa-code' },
            { name: 'Google Play Console', category: 'Tools & Platforms', icon: 'fa-brands fa-google-play' }
        ];
        await Skill.insertMany(skills);

        await Experience.create({
            title: 'Trainee Software Engineer',
            company: 'Softcodeit Solutions',
            period: 'Jan 2024 - Present',
            description: ['Assisted in developing web applications using React and Node.js', 'Participated in code reviews and agile meetings'],
            type: 'Internship'
        });

        await Education.create({
            degree: 'BSc (Hons) in Cyber Security',
            institution: 'Staffordshire University / APIIT',
            period: '2025 - Present',
            status: 'Ongoing'
        });

        await Education.create({
            degree: 'Foundation Programme in Computing',
            institution: 'APIIT University',
            period: '2023 - 2024',
            status: 'Completed'
        });

        const projects = [
            {
                title: 'Antigravity AI',
                category: 'AR Platform',
                description: 'An innovative AR platform built using Kotlin and Firebase. Available on the Google Play Store, providing immersive digital experiences.',
                tech_stack: ['Kotlin', 'Firebase', 'ARCore'],
                github_url: 'https://github.com',
                demo_url: 'https://play.google.com',
                icon_class: 'fa-solid fa-vr-cardboard',
                gradient_class: 'bg-gradient-1',
                badge_text: 'Play Store'
            },
            {
                title: 'TripMe.AI',
                category: 'AI Application',
                description: 'An AI-powered travel application featuring intelligent recommendations, personalized itineraries, and robust API integrations.',
                tech_stack: ['Firebase', 'OpenAI API', 'React', 'Tailwind'],
                github_url: 'https://github.com',
                demo_url: 'https://tripme-ai.web.app',
                icon_class: 'fa-solid fa-plane-departure',
                gradient_class: 'bg-gradient-2',
                badge_text: 'Live'
            },
            {
                title: 'Campus Web Projects',
                category: 'Web Development',
                description: 'Collection of various web applications developed for academic requirements, focused on UX and security.',
                tech_stack: ['HTML', 'CSS', 'JavaScript'],
                github_url: 'https://github.com',
                demo_url: '#',
                icon_class: 'fa-solid fa-laptop-code',
                gradient_class: 'bg-gradient-3',
                badge_text: 'Academic'
            }
        ];
        await Project.insertMany(projects);

        console.log('✅ Seeding complete! CV data is live.');
        process.exit();
    } catch (err) {
        console.error('Seeding Error:', err);
        process.exit(1);
    }
};

seed();
