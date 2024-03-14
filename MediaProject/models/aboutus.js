// models/aboutus.js
const mongoose = require('mongoose');

const aboutusSchema = new mongoose.Schema({
    title: String,
    contentparagraph1: String,
    contentparagraph2: String,
    contentparagraph3: String
});

module.exports = mongoose.model('AboutUs', aboutusSchema);

