// require express
const express = require("express");

// require controller data
const adminController = require("../controllers/admin");

// use Router()-method of express
const router = express.Router();

router.get("/overview", adminController.getOverview);

// use router functionality to render /folge-hinzufuegen page
router.get("/folge-hinzufuegen", adminController.getAddEpisode);

// use router functionality to post data
router.post("/neue-folge", adminController.postAddEpisode);

// use router functionality to render home page with new data
router.get("/", adminController.renderEpisodes);

// use router functionality to get homepage and to render the view home.ejs
router.get("/", adminController.getHome);

// export router functionality
module.exports = router;
