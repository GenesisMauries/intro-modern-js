// Asignacion desestrocturante

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
};
console.log(persona.nombre, persona.apellido);

const { nombre } = persona;

// Renombra la variable
const { nombre: nombre2 } = persona;
console.log(nombre, nombre2);

const imprimePersona = (usuario) => {
  const { nombre, apellido, edad } = usuario;
  console.log(nombre, apellido, edad);
};
imprimePersona(persona);
// Extraer directamente en el parametro de la funcion
const imprimePersonaDesestructurada = ({
  nombre,
  apellido,
  edad,
  rango = "Por definir",
}) => {
  console.log(nombre, apellido, edad, rango);
};
imprimePersonaDesestructurada(persona);

// Tarea

const usesContext = ({ nombre, edad }) => {
  return {
    nameA: nombre,
    age: edad,
    address: {
      zip: 13232,
      lat: 145.431424,
      lng: 76.374298,
    },
  };
};
// Extraccion de objetos anidados
const {
  nameA,
  age,
  address: { zip },
} = usesContext(persona);
console.log(nameA, age, zip);
