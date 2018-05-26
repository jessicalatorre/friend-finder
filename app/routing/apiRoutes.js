
// Link in Friends Data
var friendsData = require('../data/friends.js'); //..means go up one level ; . means look in current directory

var express = require('express');
var router = express.Router();

//get a route with thge url /api/fri
console.log('API Route Connected Successfully');

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
router.get('/api/routes/', function (req, res) {
  res.json(friendsData);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//req stores all the newFriend data. 
router.post('/', function (req, res) {


    //afer the post, this is the newFriend object that is created.
  // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
  //this is a condensed way to copy all the new friend object data, so it can eventually be POSTED
  var newFriend = {
    name: req.body.name, //this is string
    photo: req.body.photo, //this is a string
    scores: [] //each number is a string until we use parseInt. This bc we receive this data from user input (from form), so we need to parse it into an integer to be able to do the math for comparing friends
  };
  
  var scoresArray = [];

  //putting scores into empty array
  //as the for loop iterates, it goes through it question and posts the score to the empty array.
  for(var i=0; i < req.body.scores.length; i++){
      //parse the integers from the string (all 10 scores are 10 strings within the array (which is in the overall object) until parsed)
    scoresArray.push( parseInt(req.body.scores[i]) )
  }
  newFriend.scores = scoresArray;

  // Cross check the new friend entry with the existing ones from friends.js file
  var scoreComparisionArray = [];
  for(var i=0; i < friendsData.length; i++){

    // Check each friend's scores and sum difference in points
    //newFriend is an object. Score is an array, but is the numbers are strings
    var currentComparison = 0;
    //new friend        //list of friend         []
    //[1,2,3]           //[1,4,2] 0+2+1= 3       [3]
                        //[4,5,1] 3+3+2 = 8      [3,8]
                        //[0,1,3] 1+1+0 = 2      [3,8,2]
                        //friend number 3 is the most compatable bc the number 2 has the least amount of difference from 0
    for(var j=0; j < newFriend.scores.length; j++){
      
      currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j] );
    }

    // Push each comparison between friends to array to find the smallest difference
    //every time we find the difference we push it to an array
    scoreComparisionArray.push(currentComparison);
  }

    //this loop is to find the smallest difference
  // Determine the best match using the postion of best match in the friendsData array
  var bestMatchPosition = 0; // assume its the first person to start
  for(var i=1; i < scoreComparisionArray.length; i++){
    
    // Lower number in comparison difference means better match
    if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
      bestMatchPosition = i;
    }

  }

  // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friendsData array is chosen
  var bestFriendMatch = friendsData[bestMatchPosition];

  // Reply with a JSON object of the best match
  res.json(bestFriendMatch);

  // Push the new friend to the friends data array for storage
  friendsData.push(newFriend);

});

// Export for use in main server.js file
//module.exports = apiRoutes;
module.exports = router;