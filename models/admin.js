const path = require("path");
const fs = require("fs");

const filePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "episodes.json"
);

console.log(filePath);

module.exports = class Episode {
  constructor(epTitle, epNr, epImg) {
    this.title = epTitle;
    this.episodeNr = epNr;
    this.img = epImg;
  }
};
