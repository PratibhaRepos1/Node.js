const express = require('express');
const router = express.Router();
const ContactUs = require('../models/contactus');

// GET request to render the contact form
router.get('/', (req, res) => {
    res.render('ContactUs/contactus');
});

// POST request to handle form submission
router.post('/', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, message } = req.body;

        // Create a new ContactUs document
        const newContact = new ContactUs({
            name,
            email,
            message,
        });

        // Save the document to MongoDB
        console.log(newContact);

        await newContact.save();

        // Redirect or render a success page
        res.redirect('/'); // You can customize this URL or render a success page

    } catch (error) {
        console.error("Error saving contact form data:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
