require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const helmet = require("helmet"); 
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3000;

//Define the routing variable for authRoutes
const booksRoutes = require('./routes/bookRoutes');
const authorsRoutes = require('./routes/authorsRoutes');
const authRoutes = require('./routes/authRouter');

app.use(helmet()); 
app.use(morgan("dev"));
app.use(cors({credentials: true, origin: true})); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

//------ PER 2: SESSION MANAGEMENT --------
app.use(
  session({
    resave: false,
    saveUninitialized: false, // saveUninitialized is false because we do not want to create a session in every call
    secret: process.env.SECRET_KEY,

    // We include cookie in our sessions
    cookie: {
      httpOnly: true, // httpOnly true because of security
      secure: false, // secure is false in development, true in production
      maxAge: 1000 * 60 * 60 * 24, //this is the length the session should last, aka 24 hours or one day.
    },
  })
);

//----- PER 2:  PASSPORT INITIALIZATION ------
app.use(passport.initialize());
// passport.session below will take care of creating a session on calls that require passport authentication
app.use(passport.session());


const siteData = require('./data/siteData');
app.get("/", (request, response, next) => {
  response.status(200).json({success: {message: "This route points to the Home page"}, data: siteData , statusCode: 200});
});

//Tell the app to use the routing variables you defined earlier
app.use("/api/books", booksRoutes);
app.use("/api/authors", authorsRoutes);
app.use("/auth", authRoutes); //PER 1 NEW: CHANGE TO "/auth", formerly "/api"

//--- PER 1 UPGRADE: ERR HANDLING CODE  ---
app.use((error, request, response, next) => {
    //Our condition should be if MongoDB detects the error code 11000, we need to flag the user as a duplicate
    let condition = error.code === 11000

    //PER 1: Refactor status handling with variables 
    const authErrStatus = error.status || 400;
    const serverErrStatus = error.status || 500;

    if (condition) {
        //Refactor status handling with variables 
      return response.status(authErrStatus).json({
        error: {message: "Error detected!!!"},
        statusCode: authErrStatus,
        })
    } else {
        //console.log that account check passed
        console.log("We passed the error handling middleware, you're good to go")
    }

    //Any other errors are caught
    //Refactor status handling with variables 
    return response.status(serverErrStatus).json({
      error: {message: error.message || "Internal server error, oh no!"},
      statusCode: serverErrStatus
    })
    //UNREACHABLE
})
//-----SERVER SHOULD NOT BE MODIFIED UNLESS ACTIVATING ANALYTICS-----
app.listen(PORT, () => {
  console.log(`Carol's bookstore server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`)
});