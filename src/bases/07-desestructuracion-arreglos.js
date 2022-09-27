const personajes = ["Goku", "Vegeta", "Trunks"];

const [personaje1] = personajes; // extrae el primer elemento
const [, , personaje3] = personajes; // extrae el tercero elemento

console.log(personaje1, personaje3);

const retornaArreglo = () => {
  return ["ABC", 123, true];
};

const [letras, numeros, booleano] = retornaArreglo();
console.log(letras, numeros, booleano);

// Tarea

const usesState = (valor) => {
  return [valor, () => console.log("Hola munda")];
};
const [name, setName] = usesState("Goku");

console.log(name);
setName();
