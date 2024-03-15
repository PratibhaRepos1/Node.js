// routes/about.js
const express = require('express');
const router = express.Router();
const AboutUs = require('../models/aboutus');

router.get('/', async (req, res) => {
    try {
        const aboutusData = await AboutUs.find({});
        //console.log(aboutusData);
        res.render('AboutUs/aboutus', { aboutus: aboutusData });
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
