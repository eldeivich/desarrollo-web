// // crear un arreglo

// const numeros = [10, 20, 30, 40, 50];

// // console.table(numeros);

// const meses = new Array("enero", "febrero", "marzo");

// // console.log( meses[1] );

// const arreglo = ["Hola", 10, true, 'si', null, undefined];
// console.log(arreglo);

// let nombre = 'Juan';

// console.log(Array.isArray(nombre));

const meses = new Array("enero", "febrero", "marzo");
// meses[3] = "Abril";
//agrega al final del arreglo
meses.push("Abril");
meses.push("Mayo");
//agrega al inicio del arreglo
meses.unshift("Mes 0");
//elimina del final del arreglo
meses.pop();
//elimina del principio del arreglo
meses.shift();
//eliminar de un rango del arreglo
// meses.splice(0, 2);
//cambia el orden
meses.reverse();
//ordenar un arreglo
let frutas = ["Platano", "Manzana", "Fresa", "Naranja"];

frutas.sort();
console.log(frutas);

console.log(meses);