// require express
const express = require("express");

// require Episode-Model
const Episode = require("../models/admin");

// middleware functionality to render home page
exports.getHome = (req, res, next) => {
  res.render("home");
};

// middleware functionality to render add episode
exports.getAddEpisode = (req, res, next) => {
  res.render("add-episode");
};

// middleware functionality to retrieve episode info from form
exports.postAddEpisode = (req, res, next) => {
  const episodeTitle = req.body.episodeTitle;
  const episodeNumber = req.body.episodeNumber;
  const episodeImage = req.body.episodeImage;
  const episode = new Episode(episodeTitle, episodeNumber, episodeImage);
  episode.save();
  res.redirect("/");
};

exports.renderEpisodes = (req, res, next) => {
  const epData = Episode.fetchData();

  const episodesCallback = {
    pageTitle: "Startseite",
    path: "/",
    ep: epData
  };
  res.render("home", episodesCallback);
};
