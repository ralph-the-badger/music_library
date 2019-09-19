// require express
const express = require("express");

// middleware functionality
exports.getHome = (req, res, next) => {
  res.render("home");
};

exports.getAddEpisode = (req, res, next) => {
  res.render("add-album");
};

exports.postAddEpisode = (req, res, next) => {
  const episodeTitle = req.body.episodeTitle;
  const episodeNumber = req.body.episodeNumber;
  const episodeImage = req.body.episodeImage;
  res.redirect("/");
};
