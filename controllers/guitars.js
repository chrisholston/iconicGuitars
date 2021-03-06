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
 const findGuitar= (req,res)=>{
     const brand = req.body
     Guitar.find(brand).sort("Brand").exec((err, brandSearched) =>{
         console.log('find is working')
     res.render('guitars/search', {brandSearched})
     console.log(brand)
     console.log(brandSearched)
 })}

function newGuitar(req,res) {
    res.render('guitars/new')
}


const deleteGuitar = (req,res)=>{
    Guitar.findById(req.params.id, (err, deletedGuitar)=>{
        deletedGuitar.remove()
        deletedGuitar.save(function(){
        res.redirect(`/guitars`)
        })     
})
}


  


function create(req, res) {
    console.log( "Create is working")

    const guitar = new Guitar(req.body);

    guitar.save(function(err) {
        if (err) return res.render('guitars/new')
        console.log(guitar)
        // after guitar is created, it will redirect
        res.redirect('/guitars');
    });
}
function edit(req, res) {
    Guitar.findById(req.params.id, function(err, guitar) {
      res.render('guitars/search', { guitar });
    });
  }
  function update(req, res) {
    console.log(req.body)
    Guitar.findByIdAndUpdate(req.params.id, req.body, function(err, guitar) {
      res.redirect('/guitars')
    });
  }
  



// Set up module.exports and export the new action
  module.exports = {
    index,
    new: newGuitar,
    delete: deleteGuitar,
    update,
    create,
    findGuitar,
    edit,
}