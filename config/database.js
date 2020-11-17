// TODO: INPUT OUR MONGODB URI AND SET UP EVENT LISTENER

// set up our database
// mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/iconicGuitars?retryWrites=true&w=majority


//  set up our database with the connection URI from mongoDB. We change the link and put in our password as well as the project name.

// REMEMBER to install the mongoose module (npm i mongoose)


// 1ST STEP IS REQUIRE OUR MODULES (MONGOOSE)
// mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/iconicGuitars?retryWrites=true&w=majority

const mongoose = require('mongoose');
// 2. SET UP OUR SHORTCUT VARIABLE FOR CONVENIENCE - we will declare db and assign it to the property of connection. This is a property on the mongoose object that reprsents the actual connection on mongoose db. This will have information that 
const db = mongoose.connection;

// 3. CONNECT TO MONGO DB
// const connectionURI= 'mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/iconicGuitars?retryWrites=true&w=majority';

// 3. CONNECT TO MONGO DB- **We paste our mongodb connection URI into this string.** We add 3 options-
//  useCreateIndex, useNewUrlParser, useUnifiedTopology.
// 
/*mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

 });
*/

//4. SET UP A LISTENER TO ALERT US WHEN WERE CONNECTED
// //db.on('connected', function(){
// console.log(`connected to MongoDB on ${db.host}:${db.port}`);
// });