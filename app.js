"use strict"
const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

try {
  createFile(argv)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.error(err));
} catch (error) {
  throw error;
}