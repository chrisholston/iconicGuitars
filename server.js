// Require modules - we create a  variable caleld express and assign to the result of requiring express
const express = require('express');
// create a variable called morgan this is assigned to the result of requiring morgan.
const morgan = require('morgan');
//create a variable named port and assign it the value of 3000.
const port = 3000;

//Router modules
//1. Require the router modules. Assign this to the result of requiring.
const indexRouter = require('./routes/index');

// Create express app - we call express like a function. it returns an object containing methods that we can call to build our server. 
const app = express();

//TODO connect to the db



// Configure our settings - we use the .set method to set up our view engine. Assign the function the magic string of view engine. Magic string means you give the function a string and it knows what to do. The first paramater defines that we want to configure the view engine. In the second paramater we pick the "flavor of view engine as ejs". EJS stands for embedded javascript. 
app.set('view engine','ejs');


 

// mount our middleware. 
app.use('/',indexRouter);
// We will use 3 flavors of middle ware USING .use() We have to call morgan like a function to activate it. Morgan needs a formatter option. We will go with dev formatter option, and type it in the first paramater. Dev is balanced, not too little info, not too much. 
//Morgan will read all the http requests and print it to our terminal. It's essentially an http logger. 
app.use(morgan('dev'));
//Use our static middle ware to serve static assets. If we want to do DOM manipulation with front end HTTP requests. This allows us to serve our static requests from css and the resulting html of templates. We ask express to look for a folder called public at the root of our directory.
app.use(express.static('public'));

app.use(express.urlencoded({extended: false})); //Body Parsing middleware- when an html request gets sent. the server decodes this and adds it to req.body. It creates our form data for req.body. If we use forms with our express app, we have to use body parser. This is an object we can access and return key values pairs.  This creates our form for req.body.


// mount our routes with .use() -routes are a type of middleware so we still use .use


// tell the app to listen - the first argument is port, which is the channel we are listening for. Then we add a callback function that the listen method can call back to once the connection is established. We put in a console log just to indicate that express is listening.
app.listen(port,function(){
  console.log(`Express is listening on port: ${port}`);
});