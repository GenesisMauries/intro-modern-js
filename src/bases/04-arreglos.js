// Arreglos

const arreglo = [];
// Push modifica el arreglo principal es mejor operador spread
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
console.log(arreglo);

const arreglo2 = [...arreglo, 5];
console.log(arreglo2);

const arreglo3 = arreglo2.map((x) => x * 2);

console.log(arreglo3);
