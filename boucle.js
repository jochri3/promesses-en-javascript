const faireBoucle = (limite) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i <= limite; i++) {
      if (i === limite) {
        resolve('Terminé');
      }
    }
  });
};

console.log('Premier');
faireBoucle(1000000000)
  .then((r) => console.log(r))
  .catch((error) => console.log(error));
console.log('Deuxième');
