const path = require("path");
const fs = require("fs");

const filePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "episodes.json"
);

let episodes = [];

module.exports = class Episode {
  constructor(epTitle, epNr, epImg) {
    this.title = epTitle;
    this.episodeNr = epNr;
    this.img = epImg;
  }
  save() {
    // read file content if data is already included
    fs.readFile(filePath, (err, fileContent) => {
      // if there is no data array, include empty array
      if (err) {
        fs.writeFile(filePath, JSON.stringify(episodes), err =>
          console.log(err)
        );
      }
      // if there exists an arra, parse content to variable episodes
      if (!err) {
        episodes = JSON.parse(fileContent);
      }
    });
    // as soon data has been read, push new data to array
    episodes.push(this);
    // overwrite array with new data
    fs.writeFile(filePath, JSON.stringify(episodes), err => console.log(err));
  }
};
