// The purpose of a router is to map "routes" HTTP requests to controller code

// require your module (express)
const express = require('express');

// create a router object
const router = express.Router(); 

// require the guitars controller
const guitarsCtrl = require('../controllers/guitars');

// we are already at "/guitars"

// define the route to display a list of guitars
router.get('/', guitarsCtrl.index);

// define your route for GET '/new`
router.get('/new', guitarsCtrl.new);

//define the route for deleting a guitar
router.delete('/:id', guitarsCtrl.delete);

// define the route for creating a new guitar POST '/'
router.post('/new', guitarsCtrl.create);

// define the route for deleting a guitar
//router.delete('/', guitarsCtrl.delete);
router.post('/index', guitarsCtrl.findGuitar);

router.get('/search/:id/', guitarsCtrl.edit);

router.put('/:id/', guitarsCtrl.update);

// export your router object
module.exports = router;