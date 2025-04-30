//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection.
const PORT = 3000; 
//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (req, res, next) => {
    res.send("Hello CodeSquad Cohort 2025, you rock and I am so proud of all of your for following along with me!"); //render a str on the page
    //res.json(`Hello World, we're using JSON-Derulo in our apps. That's bae.`); //will send a json msg
}); //i want to see something when the server starts

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}. Connection established.`) //http://localhost:3000
});