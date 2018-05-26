
//after coding this, we can console log lines 28-36 on the server.js file. The code below listen on port 8080 for the / and /banana routes without having to access the server.js file for those hard coded routes.
//we use the module.exports to export the function below, so every time we want to use this function in another js file, we can. (always use require in other file and use module.exports in the file where you want to use the function). Remember it's called in with the require in the other file, but used in this file

//index.js is an entry point for all routing. So you you an edit ONE index.js file, as long as there are other route files that are created and added into this file (as needed).

//two types of require
// 1 - common require for node - node require - example: var express = require('express');
// 2 - other is requirejs for javascript - example: require("./routing/apiRoutes.js"));
//think of require as "GET ME THE CONTENT [of whatever you export]"

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    //we use require her, so we can export to the server in the htmlRoutes.js file
    app.use('/', require("./routing/htmlRoutes.js"));
    app.use('/api/friends', require("./routing/apiRoutes.js"));
    // example: app.use('/banana', require('./routing/bananaRoutes.js')); //could add another banana Route html if needed

    
}