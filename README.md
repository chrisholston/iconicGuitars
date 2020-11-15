# Iconic Guitars
A CRUD web app that lets you search for iconic guitars based on your favorite genre and guitar mode using a cloud-deployed database of instruments. 
## Getting Started
[
Click Here](https://iconicGuitars.herokuapp.com/)

## Technologies Used
* HTML
* CSS
* JavaScript/jQuery
* Node.js
* MongoDB
* Mongoose
* Express
* Google Fonts

## ERD
![ERD Diagram](https://trello.com/c/RD4TImtb/13-erd-chartpng)
## Wireframes & Completed Project Screenshots
![Home Page Wireframe]()
![Search Index Wireframe]()
![Guitar Specs Database ]()
![Completed Page]()

### Models
There are is one model:
1. Guitar model

The Guitar model contains the following properties:
* Image of guitar
* Make of Guitar
* Model of Guitar
* Year of Guitar
* Back story of guitar\

### CRUD Operations
### Displaying the Guitars and the Models
This app takes advantage of query functions within Mongoose.
One example: to get to the Show allGuitars page, we call the `.find()` function on ALL models:
```
.find({}, function (err, guitars) {
    res.render('models', {
      guitars,
    });
  });
All properties of all the guitars are passed through as we render the models page.
Therefore, if we want to create an input button to access one guitar, we can have it display its info and image.

What if we only want to show the models of a particular brand?
We would call that same `.find()` function, except this time, we would pass that brand name as a parameter:
```
IceCream.find({ brandName: req.params.brandName }, function (err, guitars) {
    res.render('bra', {
      guitars
    });
  });
```
 
The function is finding all the guitars with the desired brand name, and passesjust those guitars to the brand's models page.

### Displaying Individual Ice Creams
Once the user has chosen a genre, they are redirected to a view of all guitars featuring that genre.
If they have not chosen the genre through a specific brand, the guitars will simply appear in the order that they exist in the database. We iterate through the guitars we queried in the controller and create a view div for each.
If the user accessed the genre by selecting a brand first (i.e. Gibson> Rock), we want the first guitar(s) they see to be of that brand.
Our function in the controller would look something like this:
```
guitar.find({ genreName: req.params.genreName })
.exec( function (err, guitars) {
      guitar.find({ modelName: req.params.modelName, genreName: req.params.genreName})
      .populate("reviews.reviewedBy").exec( function (err, brandsGuitars) {
        res.render('modelsGuitars', {
          guitars,
          brandsGuitars
        });
    });
});
```
First we find ALL guitars of the genre (which gives us `Guitars`, but then we query again to find guitars of said genre ND brand (giving us `brandsGuitars`.) We can then render our brands' guitars page, looping through `brandsGuitars` first to create a view div for each, then through `guitars` to add all the remaining ones (ignoring the ones already added.)

