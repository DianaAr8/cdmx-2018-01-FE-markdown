// path te permite trabajar con rutas de archivos y directorios 
const path = require('path');
// fs proporciona una API para interactuar con el sistema de archivos 
const fs = require('fs');

let convertRoute;
// Se crea una función para traer y verificar la ruta si es relativa o absoluta
const checkRoute = (file) => {
  // Si es relativa la cambiara a absoluta con el metodo path.resolve
  let convertRoute = path.resolve(file); 
  fs.readFile(convertRoute, 'utf-8', (err, file) => { 
    // Se manda llamar la función url
    console.log(convertRoute);
    searchLinks(file);
  });
};
checkRoute('./README.md');

// Se crea función para el reconocimiento de links por medio de expresiones regulares
const searchLinks = (file) => {  
  const expReg = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
  // match es un método que busca una expresión regular en una cadena y nos devuelve esas coincidencias como un objeto Array
  const readLinks = file.match(expReg);
  const arrayLinks = readLinks.map((item) => {
    const arrayInfo = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
    // Se crean las propiedades del objeto para cada link encontrado
    const status = {
      href: arrayInfo[2],
      text: arrayInfo[1],
      file: convertRoute
    }; 
    return status;
  });
  return arrayLinks;
};

// Se exportan las funciones para que puedan ser testeadas (md-links.spec.js)
module.exports = {
  checkRoute,
  searchLinks
};