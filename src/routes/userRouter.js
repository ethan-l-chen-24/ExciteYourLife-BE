const express = require('express');
const router = express.Router();

module.exports = router;



/*
    index.js sets up server and routes to routers
    routers deal with API request and response, calling functions from the controller
    controllers are functions that handle the models
    models define the mongoose schema

    servers for any other services that is not a model/external modules

    generally 1 model for 1 controller for 1 router in API, react app will just call api functions

*/