const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('ContactUs', contactusSchema);
