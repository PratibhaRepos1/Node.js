// app.js
const express = require('express');
const axios = require('axios'); 

const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const latestNewsRouter = require('./routes/latestnews');
const News = require('./models/news'); // Import the news model
const sportsRouter = require('./routes/sports');

const app = express();
const port = 3000;


  
// Set up Mongoose
mongoose.connect('mongodb://localhost:27017/mediaDb', { useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public/images')));

// Define an array of image URLs
const images = [
    'news1.jpg',
    'news2.jpg',
    'news3.jpg',
    // Add more image URLs as needed
  ];


// // Define a route to render the page with the header template
// app.get('/', (req, res) => {
//     res.render('Home/home');
// });



//Use the latestnews route
app.use('/latestnews', latestNewsRouter);

// Define a route to render the home page with weather data and images
app.get('/', async (req, res) => {
    try {
        // Fetch weather data from OpenWeatherMap API
        const apiKey = 'e9fc84783cf39bfe5f2f72d49af50715';
        const city = 'Pune'; // Replace with your desired city
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const weatherData = weatherResponse.data;

         // Fetch latest news from the database
         const latestNews = await News.find().sort({ created_date: -1 }).limit(3); // Fetch top 3 latest news items


        res.render('Home/home', { weatherData, images, latestNews });
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send("Internal Server Error");
    }
});


// Define a route to render the About Us page with the about template
// Use the 'about' route
app.use('/about', aboutRoute);
// Use the contact route
//Use the sports route
app.use('/sports', sportsRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', contactRoute);


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
