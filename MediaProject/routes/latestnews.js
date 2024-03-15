// routes/latestnews.js

const express = require('express');
const router = express.Router();
const News = require('../models/news');

router.get('/', async (req, res) => {
  try {
    // Fetch the latest 3 news items from the database
    const latestNews = await News.find().sort({ created_date: -1 }).limit(3);
    res.render('LatestNews/latestnews', { latestNews });
  } catch (error) {
    console.error("Error fetching latest news:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

