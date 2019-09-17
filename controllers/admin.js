// require express
const express = require("express");

// middleware functionality
exports.getHome = (req, res, next) => {
  res.render("home");
};
