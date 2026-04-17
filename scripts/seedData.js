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
        console.log('🌱 Seeding database...');

        // Clear existing
        await Profile.deleteMany({});
        await Skill.deleteMany({});
        await Project.deleteMany({});
        await Experience.deleteMany({});
        await Education.deleteMany({});

        await Profile.create({
            name: 'Sehas Pathirana',
            title: 'Undergraduate Cyber Security Student | Full-Stack Developer',
            typingRoles: ["Undergraduate Cyber Security Student", "Full-Stack Developer", "Flutter & Android Developer", "AI-Powered Project Builder"],
            heroDesc: 'Engineering secure, scalable, and user-friendly digital solutions. Combining a strong foundation in Cyber Security with practical Full-Stack and Mobile development expertise.',
            aboutMe: 'I am an undergraduate student specializing in Cyber Security, with a deep passion for building secure and efficient full-stack applications. My journey in technology started with a curiosity for how things work under the hood, leading me to master both the offensive and defensive aspects of computing.',
            email: 'hello@sehas.dev',
            location: 'Sri Lanka',
            socialLinks: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com'
            }
        });

        const skills = [
            // 1. Core Domains
            { name: 'Cyber Security Fundamentals', category: 'Core Domains', icon: 'fa-solid fa-shield-halved' },
            { name: 'Full-Stack Development', category: 'Core Domains', icon: 'fa-solid fa-layer-group' },
            { name: 'Mobile App Development', category: 'Core Domains', icon: 'fa-solid fa-mobile-button' },
            { name: 'Backend Systems & APIs', category: 'Core Domains', icon: 'fa-solid fa-server' },
            { name: 'AI-Powered App Development', category: 'Core Domains', icon: 'fa-solid fa-brain' },
            
            // 2. Programming & Languages
            { name: 'Java', category: 'Programming & Languages', icon: 'fa-brands fa-java' },
            { name: 'Kotlin', category: 'Programming & Languages', icon: 'fa-solid fa-code' },
            { name: 'JavaScript', category: 'Programming & Languages', icon: 'fa-brands fa-js-square' },
            { name: 'Dart', category: 'Programming & Languages', icon: 'fa-solid fa-terminal' },
            
            // 3. Mobile Development
            { name: 'Flutter (Cross-platform Apps)', category: 'Mobile Development', icon: 'fa-solid fa-mobile-screen-button' },
            { name: 'Android Dev (Java & Kotlin)', category: 'Mobile Development', icon: 'fa-brands fa-android' },
            
            // 4. Web & Frontend
            { name: 'HTML5', category: 'Web & Frontend', icon: 'fa-brands fa-html5' },
            { name: 'CSS3', category: 'Web & Frontend', icon: 'fa-brands fa-css3-alt' },
            { name: 'React (Intermediate)', category: 'Web & Frontend', icon: 'fa-brands fa-react' },
            
            // 5. Backend & Databases
            { name: 'Node.js', category: 'Backend & Databases', icon: 'fa-brands fa-node-js' },
            { name: 'Express.js', category: 'Backend & Databases', icon: 'fa-solid fa-server' },
            { name: 'Firebase (Auth/Firestore/Storage)', category: 'Backend & Databases', icon: 'fa-solid fa-fire' },
            { name: 'MySQL', category: 'Backend & Databases', icon: 'fa-solid fa-database' },
            { name: 'SQLite', category: 'Backend & Databases', icon: 'fa-solid fa-database' },
            
            // 6. APIs & Integration
            { name: 'REST API Development', category: 'APIs & Integration', icon: 'fa-solid fa-cloud-arrow-down' },
            { name: 'Third-party API Integration', category: 'APIs & Integration', icon: 'fa-solid fa-link' },
            { name: 'Firebase Cloud Messaging (FCM)', category: 'APIs & Integration', icon: 'fa-solid fa-bell' },
            
            // 7. Tools & Platforms
            { name: 'Git & GitHub', category: 'Tools & Platforms', icon: 'fa-brands fa-github' },
            { name: 'Android Studio', category: 'Tools & Platforms', icon: 'fa-solid fa-keyboard' },
            { name: 'Visual Studio Code', category: 'Tools & Platforms', icon: 'fa-solid fa-laptop-code' },
            { name: 'Google Play Console', category: 'Tools & Platforms', icon: 'fa-brands fa-google-play' },
            
            // 8. Soft + Practical Skills (Renamed for exact match)
            { name: 'Problem Solving', category: 'Soft + Practical Skills', icon: 'fa-solid fa-lightbulb' },
            { name: 'Debugging', category: 'Soft + Practical Skills', icon: 'fa-solid fa-bug' },
            { name: 'System Design Thinking', category: 'Soft + Practical Skills', icon: 'fa-solid fa-diagram-project' },
            { name: 'Team Collaboration', category: 'Soft + Practical Skills', icon: 'fa-solid fa-users' },
            { name: 'Time Management', category: 'Soft + Practical Skills', icon: 'fa-solid fa-clock' }
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
            institution: 'SLIIT',
            period: '2021 - Present',
            status: 'Ongoing'
        });

        const projects = [
            {
                title: 'TripMe.AI',
                category: 'AI Application',
                description: 'An AI-powered travel application featuring intelligent recommendations, personalized itineraries, and robust API integrations.',
                tech_stack: ['Firebase', 'OpenAI API', 'React', 'Tailwind'],
                github_url: 'https://github.com',
                demo_url: 'https://tripme-ai.web.app',
                icon_class: 'fa-solid fa-plane-departure',
                gradient_class: 'bg-gradient-1',
                badge_text: 'Beta'
            },
            {
                title: 'Boom Music',
                category: 'Mobile App',
                description: 'A TikTok-style short video app for music lovers. Features real-time video streaming, profile systems, and follow mechanics.',
                tech_stack: ['Kotlin', 'Firebase', 'ExoPlayer', 'Node.js'],
                github_url: 'https://github.com',
                demo_url: '#',
                icon_class: 'fa-solid fa-music',
                gradient_class: 'bg-gradient-2',
                badge_text: 'New'
            },
            {
                title: 'Cap Template',
                category: 'Play Store App',
                description: 'A highly successful CapCut template sharing platform with over 1,000,000 downloads and a growing global community.',
                tech_stack: ['Java', 'PHP', 'MySQL', 'Retrofit'],
                github_url: '#',
                demo_url: 'https://play.google.com',
                icon_class: 'fa-solid fa-video',
                gradient_class: 'bg-gradient-3',
                badge_text: '1M+ DLs'
            },
            {
                title: 'CityPass SL',
                category: 'Academic Project',
                description: 'A smart public transport ticketing system for Sri Lanka, streamlining the commuter experience with digital passes.',
                tech_stack: ['Flutter', 'Firebase', 'Google Maps API'],
                github_url: 'https://github.com',
                demo_url: '#',
                icon_class: 'fa-solid fa-bus',
                gradient_class: 'bg-gradient-1',
                badge_text: 'Awarded'
            }
        ];
        await Project.insertMany(projects);

        console.log('✅ Seeding complete! Database is ready.');
        process.exit();
    } catch (err) {
        console.error('Seeding Error:', err);
        process.exit(1);
    }
};

seed();
