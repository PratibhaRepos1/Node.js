// models/aboutus.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    created_date: String
});

module.exports = mongoose.model('News', newsSchema);