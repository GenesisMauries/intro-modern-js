import { heroes } from "../data/heroes";
// Exportacion por defecto e individula juntas
import heroesdefault, { owner } from "../data/heroesdefault";

// console.log(heroes, heroesdefault, owner);

export const getHeroeById = (id, data = heroes) => {
  return data.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(2, heroes));

// Tarea
export const getHeroeByOwner = (id, data) => {
  return data.filter((heroe) => heroe.owner === id);
};
// console.log(getHeroeByOwner("DC", heroes));
