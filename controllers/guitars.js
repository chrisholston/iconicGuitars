// Require the model
const Guitar = require('../models/guitar');

// Set up module.exports and export the new action

module.exports = {
    new: newGuitar,
    create,
    index
}

// Define the new action(controller functions)

function newGuitar(req,res) {
    res.render('guitars/new')
}

function create(req, res) {
    console.log( "Create is working")

    const guitar = new Guitar(req.body);

    guitar.save(function(err) {
        console.log(guitar)
        // after guitar is created, it will redirect
        res.redirect('/guitars');
    });
}

function index(req, res) {
    // query the model (database) for all the guitars
    res.render('guitars');
}
    // Guitar.find({}, function(err, guitars) {
    //     // render a template to show all the guitars
    //     res.render('guitars/index', { guitars })
    // });
// }
