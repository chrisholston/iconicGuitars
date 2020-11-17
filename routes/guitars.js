// The purpose of a router is to map "routes" HTTP requests to controller code

// require your module (express)
const express = require('express');

// create a router object
const router = express.Router(); 

// require the movie controller
const guitarsCtrl = require('../controllers/guitars');

// we are already at "/guitars"

// define your route for GET '/new`
router.get('/new', guitarsCtrl.new);

// define the route for creating a movie POST '/'
router.post('/', guitarsCtrl.create);

// define the route to display a list of guitars
router.get('/', guitarsCtrl.index);

// export your router object
module.exports = router;