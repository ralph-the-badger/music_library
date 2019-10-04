// require express
const express = require("express");

// require controller data
const adminController = require("../controllers/admin");

// use Router()-method of express
const router = express.Router();

router.get("/overview", adminController.getOverview);

router.get("/episode-details/:episodeId", adminController.getEpisodeDetails);

router.get("/episode-bearbeiten/:episodeId", adminController.getEditEpisode);

router.post("/episode-anpassen", adminController.postEditEpisode);

// router.post("/episode-anpassen", adminController.postEditEpisode);

// use router functionality to render /episode-hinzufuegen page
router.get("/episode-hinzufuegen", adminController.getAddEpisode);

// use router functionality to post data
router.post("/neue-episode", adminController.postAddEpisode);

// use router functionality to render home page with new data
router.get("/", adminController.renderEpisodes);

// use router functionality to get homepage and to render the view home.ejs
router.get("/", adminController.getHome);

// export router functionality
module.exports = router;
