"use strict";

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en console'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Define el limite hasta donde se hace la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base debe ser un número';
    }
    return true;
  })
  .argv;

module.exports = argv;