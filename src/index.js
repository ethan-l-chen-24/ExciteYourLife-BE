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
app.use(express.urlencoded({ extended: false }));

// to remove *****
app.set('view-engine', 'ejs');


// ROUTING
// --------------------------------------------
const userRouter = require('./routes/userRouter.js');
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});


// START SERVER
// --------------------------------------------
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});

