let donnees;
const requete = (URI) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, noms: 'Jonathan Manzako' },
          { id: 2, noms: 'Russell Fakula' },
        ],
        '/users/1': { id: 1, noms: 'Jonathan Manzako' },
        '/users/2': { id: 2, noms: 'Russell Fakula' },
        '/about': 'Ceci est la page A propos',
      };
      if (pages[URI]) {
        resolve({
          status: 200,
          data: pages[URI],
        });
      } else {
        reject({
          status: 404,
          message: 'Not found',
        });
      }
    }, 4000);
  });
};

// requete('/users')
//   .then((res) => {
//     donnees = res.data;
//   })
//   .catch((error) => console.log(error));

(async function (req, res) {
  const resultats = await requete('/users');
  donnees = resultats.data;
  console.log('Données : ', donnees);
})();
