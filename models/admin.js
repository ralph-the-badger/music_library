const path = require("path");
const fs = require("fs");
const util = require("util");

const filePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "episodes.json"
);

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

function read() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(fileContent));
      }
    });
  });
}

function write(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(fileContent), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = class Episode {
  constructor(epTitle, epNr, epImg) {
    this.title = epTitle;
    this.episodeNr = epNr;
    this.img = epImg;
  }
  save() {
    // read file content if data is already included
    (async () => {
      const originalContent = await read();
      console.log(originalContent);

      await write(["Hallo"]);

      const updatedContent = await read();
      console.log(updatedContent);
    })();
    // as soon data has been read, push new data to array
    // episodes.push(this);
    // // overwrite array with new data
    // fs.writeFile(filePath, JSON.stringify(episodes), err => console.log(err));
  }
};
