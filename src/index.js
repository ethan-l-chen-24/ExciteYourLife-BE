// Entrypoint for the backend server
// Author: Ethan Chen
// --------------------------------------------

const express = require('express');
const mongoose = require('mongoose');


// CONNECT TO DATABASE
// --------------------------------------------
mongoose.connect('mongodb://localhost/dev');
var db = mongoose.connection;

// log messages once opened and if error
db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log(err);
});


// INIT APPLICATION
// --------------------------------------------
const app = express();


// ROUTING
// --------------------------------------------
const userRouter = require('./routes/userRouter.js');
app.use('/api/user', userRouter);


// START SERVER
// --------------------------------------------
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});
