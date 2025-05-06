//Start coding here: 
const express = require("express");
const router = express.Router();

const { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } = require("../controllers/authorsController");

//All routes start with "/api/authors/"
router.get("/", getAllAuthors);

router.get("/:_id", getAuthor);

router.post("/create/new", createAuthor);

router.put("/update/:_id", updateAuthor);

router.delete("/delete/:_id", deleteAuthor);

module.exports = router;