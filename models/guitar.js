// require our modules
const mongoose = require('mongoose');


// set up shortcut variable
const Schema = mongoose.Schema;

//initialize guitarSchema 

const guitarSchema = new Schema ({
    Brand: {
        type: String,
        enum: ['Gibson', 'Fender', 'Gretsch']
    },
    Model: {
        type: String
    },
    Genre: {
        type: String,
        enum:['Blues','Country','Rock']
    },
    Year: {
        type: Number
    },
    Story: {
        type: String
    },
    Image: {
        type: String
    },
});

// NEXT STEP- go into mongoDB terminal, guitar.Create(Model:Fender)

module.exports = mongoose.model('Guitar',guitarSchema );
