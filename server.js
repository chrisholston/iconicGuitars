// Require modules - we create a  variable called express and assign to the result of requiring express
const express = require('express');
// create a variable called morgan this is assigned to the result of requiring morgan.
const morgan = require('morgan');
//create a variable named port and assign it the value of 3000.
const port = 3000;

//Router modules
//1. Require the router modules. Assign this to the result of requiring.
const indexRouter = require('./routes/index');
const guitarsRouter = require('./routes/guitars');
// Create express app - we call express like a function. it returns an object containing methods that we can call to build our server. 
const app = express();


// TODO: connect to the DB - just by simply requiring the database, node.js will process that file for us.
require('./config/database');


// Configure our settings - we use the .set method to set up our view engine. Assign the function the magic string of view engine. Magic string means you give the function a string and it knows what to do. The first paramater defines that we want to configure the view engine. In the second paramater we pick the "flavor of view engine as ejs". EJS stands for embedded javascript. 
app.set('view engine','ejs');

// mount our middleware. 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//body parsing middleware creates our form data for req.body

// mount our routes with .use() -routes are a type of middleware so we still use .use
app.use('/', indexRouter);
app.use('/guitars', guitarsRouter);
// tell the app to listen 
app.listen(port,function(){
  console.log(`Express is listening on port: ${port}`);
});