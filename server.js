const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;//mongoURI is the const

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected.... Yepey!'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () = console.log(`Server running on port ${port}`));




