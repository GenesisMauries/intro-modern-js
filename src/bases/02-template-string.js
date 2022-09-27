// Template string
const nombre = "Génesis";
const apellido = "Mauries";

const nombreCompleto = `${nombre} ${apellido}`;
const nombreConEspacios = `${nombre} 
${apellido}
${2 * 5}`;

console.log(nombreCompleto);
console.log(nombreConEspacios);

function saludo(nombre) {
  return "hola mundaa soy " + nombre;
}

console.log(`Este es el texto de una funcion : ${saludo(nombre)}`);
