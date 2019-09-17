// require express
const express = require("express");

// use Router()-method of express
const router = express.Router();

// use router functionality to get homepage and to render the view home.ejs
router.get("/", (req, res, next) => {
  res.render("home");
});

// export router functionality
module.exports = router;
