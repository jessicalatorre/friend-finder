var friendsData = [
    {
        "name": "Nichola Tesla",
        "photo": "",
        "scores": [3, 2, 1, 4, 5, 2, 3, 4, 1, 3]

    },
    {
        "name": "Elon Musk",
        "photo": "",
        "scores": [1, 3, 1, 4, 5, 5, 3, 4, 1, 3]
    }
]

//NOTES ABOUT ITERATERS

//Step 1 - console log properties for a single person properties
// console.log("This is one of my new friends, " + friendsData[0].name);
// console.log("This my new friends score for the first question he answered: " + friendsData[0].score[0]); //Nicola Tesla 3
// console.log("This my second new friends score for the second question he answered: " + friendsData[1].score[1]); //Elon Musk 3

//var a = [1,2,3];  remember an array is an object in javascript, so this means it has properties. We can console log to test this. Length is a property of the object, so this is why we can use friendsData.length. Length is a property of that object
 

//Step 2 - Let's do thhis for all your friends (Example: we want to bring out the name of all friends)
// n, n-1
//we want to get everything from from the first element of the array, so we need to satisfy the condition, 
//which is var friendIndex = 0
// be sure to input control variable var = i or var = j etc. this ensures the variable IS NOT global.
//i = o initializes the variable as global which can be overwritten if we have multiple for loops
//BEST PRACTICE: don't use i or j, try using object name instead see below:

//Give var array = [1,2,3];
// n, n-1 ... this means last index is equal to length - 1, so if we want to go backwards from the index of 2--which is the 
//the number three, then we we need to use friendsData.length - 1 AND we need to ensure friendIndex is greater than 0
//AND we need to decrement to move backwards
//If we're capturing user input from a form and pushing it to an array we can still use the code below since we're not 
//hard coding any indexes or length numbers.
// for(var friendIndex = friendsData.length - 1; friendIndex >= 0; friendIndex--){
//     console.log(friendsData[friendIndex].name);


// fi = 0; 0 < 2
// tesla

for(var friendIndex = 0; friendIndex < friendsData.length; friendIndex++){
    console.log(friendsData[friendIndex].name);
    //if we want to console log ALL the scores for each friend we need to next an array to iterate through all the scores
    //if we only console.log(friendData.scores), we'd see [1,2,3], which is what we want BUT...
    //if we want to add one to each element, we do need to use the logic below, so we can add to each element. We didn't do
    //that in the example below, but that's why it's a best
    //console.log(friendsData[friendIndex].scores);
    //since we nested the second loop below, friendIndex still starts at 0 and iterates up, but setting the variable of scoreIndex to 0, allows us to iterate through each element of the score array. So the the OUTTER for loop has to wait for the second scoreIndex for loop to finish running. It finished running at the 9th index. When it stops, the first for loop starts running and increases to element one (Elon Musk); then the second for loop starts iterating throug Musk's scores.
    //scoreIndex < friendsData[friendIndex].scores.length;  Length is a property of the scores array. Scores is a property of each friend object (friend[0], friend[1] etc) within the overall friendsData array

    for(var scoreIndex = 0; scoreIndex < friendsData[friendIndex].scores.length; scoreIndex++) {
        console.log(friendsData[friendIndex].scores[scoreIndex]);
        
    }
}

// var a = {
//     b: 1,
//     c: 0
// }

var array = [];

// [row][column]

// 0 - 2
// 0 - 9

// 0,0 0,1 0,2 0,3 0,4
// 1,0 1,1 1,2 1,3 1,4
//export this file, so we can use it
module.exports = friendsData;