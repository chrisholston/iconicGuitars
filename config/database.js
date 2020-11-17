// 1ST STEP IS REQUIRE OUR MODULES (MONGOOSE)
const mongoose =require('mongoose');

// set up shortcut variables

const db = mongoose.connection;

const connectionURI= "mongodb+srv://admin:1234@cluster0.wyypc.mongodb.net/iconicGuitars?retryWrites=true&w=majority";

// 2. CONNECT TO MONGO DB- **We paste our mongodb connection URI into this string.** We add 3 options-
//  useCreateIndex, useNewUrlParser, useUnifiedTopology.

mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

 });

//4. SET UP A LISTENER TO ALERT US WHEN WERE CONNECTED
db.on('connected', function(){
console.log(`connected to MongoDB on ${db.host}:${db.port}`);
});