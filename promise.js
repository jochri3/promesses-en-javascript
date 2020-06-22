const genererNombre = (nombre) => {
  return new Promise(function (resolve, reject) {
    if (nombre > 100) {
      resolve("Tout s'es bien passé");
    } else {
      reject("Rien ne s'est bien passé");
    }
  });
};

console.log('Premier');
genererNombre(145)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

console.log('Deuxieme');
