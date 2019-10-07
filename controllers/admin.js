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
      pageTitle: "Übericht der ersten Episoden",
      path: "/overview",
      ep: content
    });
  });
};

// middleware functionality to render add episode
exports.getAddEpisode = (req, res, next) => {
  res.render("add-episode", {
    pageTitle: "Episode hinzufügen",
    path: "/episode-hinzufuegen"
  });
};

// middleware functionality to retrieve episode info from form
exports.postAddEpisode = (req, res, next) => {
  const episodeTitle = req.body.episodeTitle;
  const episodeNumber = req.body.episodeNumber;
  const episodeImage = req.body.episodeImage;
  const episode = new Episode(null, episodeTitle, episodeNumber, episodeImage);
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

exports.getEpisodeDetails = (req, res, next) => {
  const epId = req.params.episodeId;
  Episode.findEpisodeById(epId).then(details => {
    res.render("../views/episode-details.ejs", {
      content: details,
      pageTitle: `Episode ${details.episodeNr}: ${details.title}`,
      path: "/episode-details"
    });
  });
};

exports.getEditEpisode = (req, res, next) => {
  const epId = req.params.episodeId;
  Episode.findEpisodeById(epId).then(details => {
    res.render("edit-episode", {
      path: "/episode-bearbeiten",
      pageTitle: "Episode bearbeiten",
      content: details
    });
  });
};

exports.postEditEpisode = (req, res, next) => {
  const updatedEpisodeId = req.body.episodeId;
  const updatedEpisodeTitle = req.body.episodeTitle;
  const updatedEpisodeNumber = req.body.episodeNumber;
  const updatedEpisodeImage = req.body.episodeImage;
  const updatedEpisode = new Episode(
    updatedEpisodeId,
    updatedEpisodeTitle,
    updatedEpisodeNumber,
    updatedEpisodeImage
  );
  updatedEpisode.save();
  res.redirect("/overview");
};

exports.postDeleteEpisode = (req, res, next) => {
  const episodeId = req.body.episodeId;
  Episode.deleteEpisodeById(episodeId)
    .then(() => {
      res.redirect("/overview");
    })
    .catch(err => console.log(err));
};
