// require express
const express = require("express");

// middleware functionality to render home page
exports.getHome = (req, res, next) => {
  res.render("home");
};

// middleware functionality to render add episode
exports.getAddEpisode = (req, res, next) => {
  res.render("add-album");
};

// middleware functionality to retrieve episode info from form
exports.postAddEpisode = (req, res, next) => {
  const episodeTitle = req.body.episodeTitle;
  const episodeNumber = req.body.episodeNumber;
  const episodeImage = req.body.episodeImage;
  res.redirect("/");
};
