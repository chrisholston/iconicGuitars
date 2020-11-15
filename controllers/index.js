//1. require the model (optional)

// const {model}= require("mongoose");

//2. set up module.exports - so we can export functionality. we export the index function. We will export index
module.exports = {
    index
};
//3. Define our controller actions (these are functions aka router middleware. these are also called functions or router middleware. they all mean the same thing). index.js doesnt work with the model , it is just for the home page.
// Controllers take in data, they take it in as a request. They process that data and return a response. We will call the render method and render the index.ejs This is always the same. WE ALWAYS HAVE A REQUEST AND A RESPONSE OBJECT.

function index(req,res) {
    res.render('index');
}