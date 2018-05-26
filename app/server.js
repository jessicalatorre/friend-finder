// step 1 - set up require vars and express app.
//step 2 - establish connection to server and tell server to listen to port 8080

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//best practice to have an abstract layer between fontend and backend (ex. all sql query code should be separate from JS code. Why? What if you need to write code to access mysql db and mongo db? You'd have to write separate JS functions to query both databases. Timeconsuming and expensive to rewite frontend JS code)
//another example with paths - req can become a route. API requests in path can keep requests to server more general

var app = express();
//port for listening
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the “public” directory in the application directory:
//app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/'));

//set up Express to parse data received from server
//three lines below standard for setting up express server
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.text()); //? REVIEW

app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//this sets up the server for the designated routes
// app.get('/', function (req, res) {
//     // res.send('Hello World') - commented this out bc we don't need to send a string to the server. We're need to set up the listener
//     console.log('Hello World; listener activated.') //go to localhost:8080/ to ensure listener is activated. Then check terminal. Should see the console.log now
//   });

//   //practice with another route
//   app.get('/banana', function (req, res) {
//     console.log('Hello Banana Shake! Yum.') //go to localhost:8080/ to ensure listener is 
//   });

  //to avoid setting up multiple paths--which can be messy and timeconsuming--let's set up an entry point
  //we pass in app, so we can reun it immediately, and we're requiring the ./app/index.js'. So we can access it in the index.js file. 
  //Now looks at index.js file.... for module export to server with / and banan routes
  var router = require('./index.js')(app);

  //listens to port
  app.listen(PORT, function (){
      console.log("HUZZAH! You're listening on port: " + PORT);
  });


   
//   app.listen(3000)

