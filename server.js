// Require modules - 
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const methodOverride = require('method-override');

//Router modules
//1. Require the router modules. Assign this to the result of requiring.
const indexRouter = require('./routes/index');
const guitarsRouter = require('./routes/guitars');
const guitar = require('./models/guitar');
// Create express app - we call express like a function. it returns an object containing methods that we can call to build our server. 
const app = express();


// TODO: connect to the DB - just by simply requiring the database, node.js will process that file for us.
require('./config/database');


// Configure our settings - we use the .set method to set up our view engine. Assign the function the magic string of view engine, and define view engine as ejs.
app.set('view engine','ejs');

// mount our middleware. 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));  

//body parsing middleware creates our form data for req.body

// mount our routes with .use() -routes are a type of middleware so we still use .use
app.use('/', indexRouter);
app.use('/guitars', guitarsRouter);

// tell the app to listen 
app.listen(port,function(){
  console.log(`Express is listening on port: ${port}`);
});