const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    period: { type: String, required: true },
    status: { type: String, default: 'Ongoing' }
});

module.exports = mongoose.model('Education', EducationSchema);
