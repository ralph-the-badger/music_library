const path = require("path");
const fs = require("fs");

// define path to JSON-file
const filePath = path.join(
  path.dirname("process.mainModule.filename"),
  "data",
  "episodes.json"
);

// return promise to read data from JSON
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

// return promise to save data in JSON
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

// define Episode model
module.exports = class Episode {
  constructor(id, epTitle, epNr, epImg) {
    this.id = id;
    this.title = epTitle;
    this.episodeNr = epNr;
    this.img = epImg;
  }
  async save() {
    const existingContent = await read();
    if (this.id) {
      const indexOfExistingEpisode = existingContent.findIndex(
        ep => ep.id == this.id
      );
      const updateEpisode = [...existingContent];
      updateEpisode[indexOfExistingEpisode] = this;
      await write(updateEpisode);
    } else {
      this.id = Math.floor(Math.random() * 1000).toString();
      // awaiting promise to resolve read data

      // using spread operator to declare new variable
      const lala = [...existingContent];

      // 'this' refers to the three constructor parameters
      lala.push(this);

      // awaiting promise to resolve written data
      await write(lala);

      // awaiting promise to resolve read data
      const updatedContent = await read();
    }
  }
  static async fetchData() {
    const content = await read();
    return content;
  }
  static async findEpisodeById(id) {
    const readFile = await read();
    const readyFile = [...readFile];
    const content = readyFile.find(ep => ep.id == id);
    return content;
  }
};
