// path te permite trabajar con rutas de archivos y directorios 
const path = require('path');
// fs proporciona una API para interactuar con el sistema de archivos 
const fs = require('fs');


// Se crea una función para traer y verificar la ruta si es relativa o absoluta
const checkRoute = (file) => {
  console.log(file);
  // Si es relativa la cambiara a absoluta con el metodo path.resolve
  const convertRoute = path.resolve(file);  
  console.log(convertRoute);
};

// Se manda llamar la función para que se ejecute y como parámetro se le da la ruta del archivo 
checkRoute('./README.md');