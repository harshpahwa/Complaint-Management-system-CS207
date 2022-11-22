const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/CMPS');
mongoose.connect('mongodb+srv://Harsh:Harsh%4069@cluster0.iztxd6x.mongodb.net/CMPS?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;