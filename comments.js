// Create web server using express
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static('public'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load routes
const comments = require('./routes/comments');

// Use routes
app.use('/comments', comments);

// Listen on port
app.listen(port, () => console.log(`Server running on port ${port}`));
