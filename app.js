// require Packages
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// make functionality of express available
const app = express();

// define EJS as view engine and where to find EJS-views
app.set("view engine", "ejs");
app.set("views", "views");

// use body parser to get request data in body
app.use(bodyParser.urlencoded({ extended: false }));

// define path to static folder "public"
app.use(express.static(path.join(__dirname, "public")));

// require and use connection to route
const adminRoutes = require("./routes/admin");
app.use(adminRoutes);

// listen to localhost port 3000
app.listen(3000);
