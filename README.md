# friend-finder

Friend Finder is similar to a dating app in that it matches users with new friends based on the user’s response to a short questionnaire. Users respond to each survey question by selecting a value between 1 (Strongly Disagree) to 5 (Strongly Agree). 

Once the questionnaire is submitted, the score for each question is compared with a an array of previously created friends, each of which have an array of varying scores with are summed. The friend with the smallest sum--or the least amount of difference--is returned as a compatible friend. 

The application uses Node.js and Express server on the backend and the Bootstrap framework on the frontend.

## Demo

Click this this link to view a deployed version on Heroku: https://vast-eyrie-39399.herokuapp.com/
