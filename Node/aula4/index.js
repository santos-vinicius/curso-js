const fs = require('fs').promises;
const { stat, read } = require('fs');
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files);
}

async function walk(files) {
  for (let file of files) {
    const fileFullPAth = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPAth);

    if (stats.isDirectory()) {
      readdir(fileFullPAth);
      continue;
    }

    console.log(file, stats.isDirectory());
  }
}

readdir();
