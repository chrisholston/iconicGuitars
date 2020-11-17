
// *a router simply routes(or maps) http requests to controller code*

//1. Require our modules - we require the express module. In order to use our router object we need to require express.

const express = require('express');

//2. create the router object . once express has been required, Create a variable called router and assign that to the value of express with a router factoring. We have to capitalize the first letter and call it as a function. When they get invoked they return a single object. We store it in the variable called router. 
const router = express.Router();


//3. Require the controller module to map requests to index

const indexCtrl = require('../controllers/index');

//4. dEFINE OUR ROUTES

// GET "/" ---give me the homepage""
router.get('/', indexCtrl.index);


//5. EXPORT OUR ROUTER OBJECT (so that we can make it available somewhere else.)We assign this method to our router object.
module.exports = router;