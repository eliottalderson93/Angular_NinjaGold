// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));
// Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
//DATABASE/MONGOOSE
var mongoose = require('mongoose');

// const bcrypt = require('bcrypt');

// const session = require('express-session');

// const flash = require('express-flash');


var localHostLocation = 8500;
app.listen(localHostLocation, function() { 
    console.log('listening on port:' + localHostLocation.toString()); 
    }).on('error', function(err) { 
        if (err.errno === 'EADDRINUSE') {
            console.log("port "+localHostLocation.toString() +' busy'); 
            localHostLocation += 500;
        }
        else { 
            console.log(err); 
        } 
    });