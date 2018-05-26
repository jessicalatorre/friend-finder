var express = require('express');
var router = express.Router()

//we need to this module to use the path.join method.
//path does exactly that: allows us to use path.join. It's path library
var path = require('path');

router.get('/survey', function (req, res) {
    //path.join changes pathname syntax, so it can be used. Could be different in linux and that mac for instance.
    //res.senFile sends the actual survey.html page to the server
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
})

router.get('/', function (req, res) {
      //res.senFile sends the actual survey.html page to the server
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

//and we export the router objects. This means we'll be able to use it with require in the index.js file
//we're only exporting what is needed. In this case it's only router
module.exports = router;