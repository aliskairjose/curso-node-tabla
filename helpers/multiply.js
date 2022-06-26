"use strict"

var fs = require('fs');

const createFile = async ({ base, listar, hasta }) => {
  let salida = '';
  for (let index = 0; index <= hasta; index++) {
    salida += (`${base} x ${index} = ${base * index}\n`);
  }

  if (listar) {
    console.clear();
    console.log('======================')
    console.log(`  Tabla del ${base}   `)
    console.log('======================')
    console.log(salida)
  }

  fs.writeFileSync(`./files/tabla-${base}.txt`, salida);

  return `tabla-${base}.txt`;
}

module.exports = { createFile };