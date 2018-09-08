// path te permite trabajar con rutas de archivos y directorios 
const path = require('path');
// fs proporciona una API para interactuar con el sistema de archivos 
const fs = require('fs');

const fetch = require('node-fetch');

let convertRoute;


// Se crea una función para traer y verificar la ruta si es relativa o absoluta
const checkRoute = (file) => {
  console.log(file);
  // Si es relativa la cambiara a absoluta con el metodo path.resolve
  const convertRoute = path.resolve(file);  

  fs.readFile( convertRoute, 'utf-8', (err, file) => {
    if (err) {
      console.log('Error, no se encontro archivo');
    } 
    console.log(convertRoute);
      url(file);
    
});
 }
 checkRoute('./README.md');
 

const url = (file) => { 
  const expReg = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
  let readLinks = file.match(expReg);
  //console.log(readLinks);
  let arrayLinks = readLinks.map((item) => {
    const arrayInfo = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
      let status = {
        href: arrayInfo[2],
        text: arrayInfo[1],
        file:  convertRoute
      }
      return status;
  })
  console.log(arrayLinks);
  return arrayLinks;


};

