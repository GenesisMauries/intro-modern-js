// Objetos literales

// Cada objeto tiene su prototipe oseas ADN

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 13232,
    lat: 145.431424,
    lng: 76.374298,
  },
};
console.table(persona);

// nuevo objeto
const personaDos = { ...persona };
console.log(personaDos);
