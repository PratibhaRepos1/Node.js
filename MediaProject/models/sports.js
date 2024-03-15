// models/sports.js
const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    created_date: String
});

module.exports = mongoose.model('Sports', sportsSchema);