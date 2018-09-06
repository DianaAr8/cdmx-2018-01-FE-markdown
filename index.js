// path te permite trabajar con rutas de archivos y directorios 
const path = require('path');
// fs proporciona una API para interactuar con el sistema de archivos 
const fs = require('fs');

const fetch = require('node-fetch');


// Se crea una función para traer y verificar la ruta si es relativa o absoluta
const checkRoute = (file) => {
  console.log(file);
  // Si es relativa la cambiara a absoluta con el metodo path.resolve
  const convertRoute = path.resolve(file);  
  console.log(convertRoute);
};

// Se manda llamar la función para que se ejecute y como parámetro se le da la ruta del archivo 
checkRoute('./README.md');

// Se crea función para leer y contar las líneas del archivo
// Se utiliza para leer archivos, se da la ruta y se utiliza "utf8" para reconocimiento de acentos en el archivo al ser leído 
const countLines = fs.readFile('./README.md', 'utf-8', (err, file) => {
  if (err) {
    console.log('Error, no se encontro archivo');
  } else {
    // console.log(file);
    url(file);
    let lines = file.split('\n').length;
    // Se retorna el resultado y se concatena para imprimir en consola el total de líneas que contiene el archivo
    console.log(lines + ' ' + 'lines');
    return lines + ' ' + 'lines';
  };
});

const url = (file) => { 
  const expReg = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
  const readLink = file.match(expReg);
  console.log(readLink);
};
