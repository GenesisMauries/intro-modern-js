// funciones
function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar("Génesis"));

// Funcion optima
const saludarOptimizada = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludarOptimizada("Génesis"));

// Funcion lambda o flecha

const saludarFlecha = (nombre) => `Hola ${nombre}`;
console.log(saludarFlecha("Génesis"));

// Regresar un objeto con funcion saludarFlecha
const getUser = () => ({ uid: "ABC123", username: "golosa69" }); // encierra entre parentesis el objeto de retorno

console.log(getUser());

// Tarea

const usuariaActiva = () => ({ uid: "XYX789", username: "YoPerreoSola" });

console.log(usuariaActiva());
