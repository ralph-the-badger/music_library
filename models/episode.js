const path = require("path");
const fs = require("fs");

// define path to JSON-file
const filePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "episodes.json"
);

// // define Episode model
// module.exports = class Episode {
//   constructor(epTitle, epNr, epImg) {
//     this.title = epTitle;
//     this.episodeNr = epNr;
//     this.img = epImg;
//   }
// };

// fs.readFile("filePath", function(err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("That's Callback.");
