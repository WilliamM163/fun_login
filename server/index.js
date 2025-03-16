'use strict';

// Importing modules and frameworks
const express = require('express');
const cors = require('cors');

// Importing environment variables
require('dotenv').config();
const port = process.env.SERVER_PORT;

const app = express();

// Adding Middle
app.use(cors());
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send({title: 'Hello World!'});
});

// Adding routes
const userRoute = require('./routes/user.js');
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Fun Login API | Listening to http://localhost:${port}`);
});