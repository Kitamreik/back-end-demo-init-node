//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();

//---------Middleware----------
//cors
const cors = require("cors");

//morgan
const morgan = require("morgan");

//end Middleware

//define a port number for the server to listen for a connection.
const PORT = 3000; 

app.use(cors());
app.use(morgan("dev"));
//combined - show a log that is more comprehensive
//dev - show simpler information

//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (req, res, next) => {
    res.send("Hello CodeSquad Cohort 2025, you rock and I am so proud of all of you for following along with me!"); //render a str on the page
    //res.json(`Hello World, we're using JSON-Derulo in our apps. That's bae.`); //will send a json msg
}); //i want to see something when the server starts

app.get("/admin", (req, res, next) => {
    res.send("This route points to the Admin Console page");
});

app.get("/authors", (req, res, next) => {
    res.send("This route points to the Author page");
});

app.get("/books", (req, res, next) => {
    res.send("This route points to the Books page");
});

app.get("/site-routes", (req, res, next) => {
    res.send("This route points to the site router page");
});


//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
    //console.log(`Server is listening on http://localhost:${PORT}. Connection established.`) //http://localhost:3000
    console.log(`Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`);
});