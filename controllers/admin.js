// require express
const express = require("express");

// require Episode-Model
const Episode = require("../models/admin");

// middleware functionality to render home page
exports.getHome = (req, res, next) => {
  res.render("home");
};

exports.getOverview = (req, res, next) => {
  epData = Episode.fetchData().then(content => {
    res.render("overview", {
      pageTitle: "Übericht der ersten Folgen",
      path: "/overview",
      ep: content
    });
  });
};

// middleware functionality to render add episode
exports.getAddEpisode = (req, res, next) => {
  res.render("add-episode", {
    pageTitle: "Folge hinzufügen",
    path: "/folge-hinzufuegen"
  });
};

// middleware functionality to retrieve episode info from form
exports.postAddEpisode = (req, res, next) => {
  const episodeTitle = req.body.episodeTitle;
  const episodeNumber = req.body.episodeNumber;
  const episodeImage = req.body.episodeImage;
  const episode = new Episode(episodeTitle, episodeNumber, episodeImage);
  episode.save();
  res.redirect("/overview");
};

exports.renderEpisodes = (req, res, next) => {
  epData = Episode.fetchData().then(content => {
    res.render("home", {
      pageTitle: "Startseite",
      path: "/",
      ep: content
    });
  });
};
