//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection.
const PORT = 3000; 

//---------Middleware----------
//cors
const cors = require("cors");

//morgan
const morgan = require("morgan");

//NEW: add the path module
const path = require("node:path");

app.use(cors());
app.use(morgan("dev"));
//combined - show a log that is more comprehensive
//dev - show simpler information

//--------- PER 2: CW: Dynamic Node Review ------------
//Tell the app to use express to bundle all of the files within the public directory
app.use(express.static(path.join(__dirname + "/public")));

//Tell the app to use express and JSON to read data
app.use(express.json());

//Tell the app to use express and urlencoded to scramble form information and set to true.
app.use(express.urlencoded({extended: true}));

//--------- PER 2: CW: Dynamic Node Review ------------
//end Middleware
//--------- PER 3: CW: Dynamic Pass Data -------------
//Insert Site Data here:

//Insert arrays

//Upgrade ALL routes
//Skeleton: 
// app.get("", (req, res, next) => {
//   res.status().json({
//     success: {}, //the str that registers when we get an OK response
//     data: {},   //the data that should render within this object
//     statusCode:  //this should be a number
//   });
// });

//Use the question against itself!!!

//Refactor home

//Refactor admin

//Refactor books

//Refactor books/id

//--------- PER 3: CW: Dynamic Pass Data -------------

//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (req, res, next) => {
    //res.send("Hello CodeSquad Cohort 2025, you rock and I am so proud of all of you for following along with me!"); //render a str on the page
    //res.json(`Hello World, we're using JSON-Derulo in our apps. That's bae.`); //will send a json msg
    res.status(200).json({
        success: {message: "Hello CodeSquad Cohort 2025, you rock and I am so proud of all of you for following along with me!"},
        statusCode: 200
    });
}); //i want to see something when the server starts

app.get("/admin", (req, res, next) => {
    //res.send("This route points to the Admin Console page");
    res.status(200).json({
        success: {message: "This route points to the Admin Console page"},
        statusCode: 200
    });
});

app.get("/authors", (req, res, next) => {
    //res.send("This route points to the Author page");
    res.status(200).json({
            success: {message: "This route points to the Author page"},
            statusCode: 200
        });
    });

app.get("/books", (req, res, next) => {
    //res.send("This route points to the Books page");
    res.status(200).json({
            success: {message: "This route points to the Books page"},
            statusCode: 200
        });
});

app.get("/site-routes", (req, res, next) => {
    // res.send("This route points to the site router page");
    res.status(200).json({
        success: {message: "This route points to the site router page"},
        statusCode: 200
    });
});

//--------- ^PREVIOUS CLASSWORK^ -------------
//START HERE: 
/*
Node.js server Review

With the same five basic ROUTES you just made, comment out the .send() method

REFACTOR the handler from .send() to .status().json with a success message and the statusCode
*/
//--------- PER 2: CW: Dynamic Node Review ------------
/*
Create 4 NEW GET routes that send a request, receive a response, and move to the next block of code w/ .status().json and a success message :
PATH: /books/create, HANDLER:"This route points to the Create Book page”
PATH: /books/:_id, HANDLER: "This route points to the specific book via the ID”
PATH: /authors/create, HANDLER: "This route points to the Create Author page”
PATH: /authors/:_id, HANDLER: "This route points to the specific author via the ID”
*/
app.get("/books/create", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the Create Book page"},
        statusCode: 200
    });
});
app.get("/books/:_id", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the specific book via the ID"},
        statusCode: 200
    });
});
app.get("/authors/create", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the Create Author page"},
        statusCode: 200
    });
});
app.get("/authors/:_id", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the specific author via the ID"},
        statusCode: 200
    });
});

//------ route parameters (BONUS) here -------

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => { //http://localhost:3000
    console.log(`Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`);
});