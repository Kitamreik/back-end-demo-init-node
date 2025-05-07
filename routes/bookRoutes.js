const express = require("express");
const router = express.Router();

const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controllers/bookController");

//formerly from app.js
/*
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
*/

//All routes start with "/api/books/" --> //http://localhost:3000/api/books
router.get("/", getAllBooks); //http://localhost:3000/api/books/

router.get("/:_id", getBook); //http://localhost:3000/api/books/:_id

router.post("/create/new", createBook); //http://localhost:3000/api/books/create/new
 
router.put("/update/:_id", updateBook); //http://localhost:3000/api/books/update/:_id

router.delete("/delete/:_id", deleteBook); //http://localhost:3000/api/books/delete/:_id

module.exports = router;