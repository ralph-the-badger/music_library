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
  constructor(epTitle, epNr, epImg) {
    this.title = epTitle;
    this.episodeNr = epNr;
    this.img = epImg;
  }
  async save() {
    // awaiting promise to resolve read data
    const originalContent = await read();
    console.log(originalContent);

    // using spread operator to declare new variable
    const lala = [...originalContent];

    // 'this' refers to the three constructor parameters
    lala.push(this);

    // awaiting promise to resolve written data
    await write(lala);

    // awaiting promise to resolve read data
    const updatedContent = await read();
    console.log(updatedContent);
  }
  static async fetchData() {
    const storedData = await read();
    return storedData;
  }
};
