// Entrypoint for the backend server
// Author: Ethan Chen
// --------------------------------------------

const express = require('express');
const session = require("express-session");
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const passport = require('passport');


// CONNECT TO DATABASE
// --------------------------------------------
// password 3yNW0joTCOSlj54R
mongoose.connect('mongodb+srv://ethan-l-chen-24:3yNW0joTCOSlj54R@cluster0.xmpzkcb.mongodb.net/?retryWrites=true&w=majority');
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
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
)


// passport middleware
app.use(passport.initialize());
app.use(passport.session());

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

