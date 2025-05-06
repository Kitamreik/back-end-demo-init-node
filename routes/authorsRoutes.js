//Start coding here: 
const express = require("express");
const router = express.Router();

const { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } = require("../controllers/authorsController");

//formerly from app.js
/*
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
*/

//All routes start with "/api/authors/"
router.get("/", getAllAuthors); //http://localhost:3000/api/authors/

router.get("/:_id", getAuthor); //http://localhost:3000/api/authors/:_id

router.post("/create/new", createAuthor); //http://localhost:3000/api/authors/create/new

router.put("/update/:_id", updateAuthor); //http://localhost:3000/api/authors/update/:_id

router.delete("/delete/:_id", deleteAuthor); //http://localhost:3000/api/authors/delete/:_id

module.exports = router;