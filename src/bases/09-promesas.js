import { getHeroeById } from "..08-import-export";
import { heroes } from "../data/heroes";
// Promesas

// const promesa = new Promise((resolve, reject) => {
//   // las promesas se ejecutan despues de todo lo sincrono
//   setTimeout(() => {
//     console.log("dos despues");
//     const heroe = getHeroeById(2, heroes);
//     resolve(heroe); // el resolve envia los argumentos al then para ser usados
//     // reject();
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log(".then de la promesa con el ", heroe);
//   })
//   .catch((err) => {
//     console.error(".catch de la promesa", err.message);
//   })
//   .finally(() => {
//     console.log(".finally de la promesa");
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    // las promesas se ejecutan despues de todo lo sincrono
    setTimeout(() => {
      console.log("dos despues");
      const heroe = getHeroeById(id, heroes);
      if (!heroe) {
        reject("No se encontro el heroe"); // en rejecto envia arumentos para el catch
      }
      resolve(heroe); // el resolve envia los argumentos al then para ser usados
    }, 2000);
  });
};
getHeroeByIdAsync(1).then(console.log).catch(console.warn); // contraccion de las lineas siguientes
// .then((heroe) => console.table(heroe))
// .catch((error) => console.log("estoy en el catch", error));
