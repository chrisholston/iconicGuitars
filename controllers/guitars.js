// Require the model
const Guitar = require('../models/guitar');

function index(req, res) {
    // query the model (database) for all the guitars
    // res.render('guitars');

    Guitar.find({}, function(err, guitars) {
        // render a template to show all the guitars
        res.render('guitars/index', { guitars })
    });
}


// Define the new action(controller functions)

function newGuitar(req,res) {
    res.render('guitars/new')
}

function deleteGuitar(req,res) {
    console.log("The delete is working!")
    Guitar.deleteOne(req.params.id);
        res.redirect('/guitars');
    }



function create(req, res) {
    console.log( "Create is working")

    const guitar = new Guitar(req.body);

    guitar.save(function(err) {
        if (err) return res.render('.guitars/new')
        console.log(guitar)
        // after guitar is created, it will redirect
        res.redirect('/guitars');
    });
}




// Set up module.exports and export the new action
  module.exports = {
    index,
    new: newGuitar,
    delete: deleteGuitar,
    create
}