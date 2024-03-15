// routes/about.js
const express = require('express');
const router = express.Router();
const Sports = require('../models/sports');

router.get('/', async (req, res) => {
    try {
        const sportsData = await Sports.find({});
        console.log(sportsData);
        res.render('Sports/sports', { sports: sportsData });
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

