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
// Site Data 
const username = 'CodeSquader';
const date = new Date();
const year = date.getFullYear();
const isSignedIn = true;

//Insert arrays
// Array containing 3 objects, each object representing information about a specific book. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead. 
const books = [
    {
      _id: "001",
      title: "Midnight for Charlie Bone",
      author: "Jenny Nimmo",
      price: 23,
      starRating: 4,
      synopsis:
        "In the first novel, 10-year-old Charlie Bone discovers that he has a special power. After accidentally encountering a photograph of a missing baby, Charlie begins to hear the voices of people in photographs. He discovers that he is a descendant of the Red King, who was an ancient magician."
    },
    {
      _id: "002",
      title: "Akira",
      author: "Katsuhiro Otomo",
      price: 16,
      starRating: 3,
      synopsis:
        "Akira, a dystopian saga set in Neo-Tokyo, a city recovering from thermonuclear attack where the streets have been ceded to motorcycle gangs and the rich and powerful run dangerous experiments on destructive, supernatural powers that they cannot control."
    },
    {
      _id: "003",
      title: "Matilda",
      author: "Roald Dahl",
      price: 15,
      starRating: 5,
      synopsis:
        "A girl gifted with a keen intellect and psychic powers uses both to get even with her callous family and free her kindly schoolteacher from the tyrannical grip of a headmistress."
    },
    //make more books if you want...
]
  
// Array containing 3 objects, each object representing information about an author. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead. 
const authors = [
    {
    _id: '001',
    firstName:'Jenny', 
    lastName: 'Nimmo',
    birthYear: 1944, 
    bio: "Jenny Nimmo is a British author of children's books, including fantasy and adventure novels, chapter books, and picture books."
    },
    {
    _id: '002',
    firstName:'Katsuhiro', 
    lastName: 'Otomo',
    birthYear: 1954, 
    bio: 'Katsuhiro Otomo is a Japanese manga artist, screenwriter, animator and film director. He is best known as the creator of Akira, in terms of both the original 1982 manga series and the 1988 animated film adaptation.'
    },
    {
    _id: '003',
    firstName:'Roald', 
    lastName: 'Dahl',
    birthYear: 1916, 
    bio: "Roald Dahl was a British author who penned 19 children's books over his decades-long writing career."
    }
]

//--------- PER 3: CW: Dynamic Pass Data -------------

//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (req, res, next) => {
    res.status(200).json({
        success: {message: "Hello CodeSquad Cohort 2025, you rock and I am so proud of all of you for following along with me!"},
        //in a key of data and a value of an object that has userName, date, and year
        data: {
            username: username,
            date: date,
            year: year
        },
        statusCode: 200
    });
}); //i want to see something when the server starts

app.get("/admin", (req, res, next) => {
    //res.send("This route points to the Admin Console page");
    res.status(200).json({
        success: {message: "This route points to the Admin Console page"},
        //key of data and a value of an object that has isSignedIn as the parameter.
        data: {
            isSignedIn: isSignedIn
        },
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

//-----AWESOME AUTHORS -------
app.get("/authors", (req, res, next) => {
    //res.send("This route points to the Author page");
    res.status(200).json({
            success: {message: "This route points to the Author page"},
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

//------ BOOK BESTIES ------
app.get("/books", (req, res, next) => {
    //res.send("This route points to the Books page");
    res.status(200).json({
            success: {message: "This route points to the Books page"},
            //include the proper array of data that is needed to be passed in a key of data 
            data: {
                //and a value of an object that has the array as the parameter.
                books: books
            },
            statusCode: 200
        });
});
app.get("/books/create", (req, res, next) => {
    res.status(200).json({
        success: {message: "This route points to the Create Book page"},
        statusCode: 200
    });
});
app.get("/books/:_id", (req, res, next) => {
    const params = request.params; //store the request.params object in a variable
    console.log(params);
    const {_id} = params; //Retrieve the _id from the parameters using object destructuring
    //Create a new variable called foundBook and use the .find method on books array to find the book with the given _id.
    const foundBook = books.find((book) => book._id === _id);
    //Stage an if...else statement to detect if there is a book found. 
    if (foundBook) { //If the book is found, log the key of data and a value of an object that has the foundBook as the parameter after the success message.
        res.status(200).json({
            success: {message: "This route points to the specific book via the ID"},
            key: {
                book: foundBook
            },
            statusCode: 200
        });
    } else { //Otherwise, send a 404 error with the message of "There is no book with this id", with the corresponding statusCode.
        res.status(404).json({
            error: {message: "There is no book with this id"},
            statusCode: 404
        })
    }
    
});

//------ route parameters (BONUS) here -------

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => { //http://localhost:3000
    console.log(`Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`);
});

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