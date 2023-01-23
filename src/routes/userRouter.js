const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', (req, res) => {
    res.json({
        body: "Hello World"
    })
});

router.post('/login', (req, res) => {

});

router.post('/register', (req, res) => {

    const body = req.body;
    
    try {
        UserController.register(req, res, next, body.name, body.email, body.password);
        res.sendStatus(200);
    } catch(error) {
        res.send(error);
    }
});

module.exports = router;




/*
    index.js sets up server and routes to routers
    routers deal with API request and response, calling functions from the controller
    controllers are functions that handle the models
    models define the mongoose schema

    servers for any other services that is not a model/external modules

    generally 1 model for 1 controller for 1 router in API, react app will just call api functions

*/