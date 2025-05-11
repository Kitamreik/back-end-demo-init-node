const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const helmet = require("helmet"); //make sure you have helmet from this classwork on
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(helmet()); //make sure you have helmet from this classwork on

app.use(morgan("dev"));
app.use(cors());

//Define the routing variable for authRoutes
const booksRoutes = require('./routes/booksRouter');
const authorsRoutes = require('./routes/authorsRouter');
const authRoutes = require('./routes/authRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

const siteData = require('./data/siteData');
app.get("/", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Home page"}, data: siteData , statusCode: 200});
});

//Tell the app to use the routing variables you defined earlier
app.use("/api/books", booksRoutes);
app.use("/api/authors", authorsRoutes);
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Carol's bookstore server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`)
});