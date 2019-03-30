// let numero1 = 50,
//     numero2 = "10",
//     numero3 = "tres",
//     numero4 = 20.20;

// console.log(numero1 + numero2);

// console.log( Number(numero2) + numero1);
// console.log( parseInt(numero4) + numero1 );
// console.log( parseFloat(numero4) + numero1 );

// console.log ( Number(numero3));

let dato;
dato = Number("20");
dato = Number("20.20");
dato = parseInt("20.20");
dato = Number("-20.20");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number("Hola mundo");
dato = Number([1,2,3,4]);

// parseInt y parseFloat
dato = parseInt("100");
dato = parseInt("100.20");
dato = parseFloat("100.20");
dato = parseFloat("100");

//To Fixed
let numero1 = "4710927491743.7354097345";
let numero2 = 471029743012374.62349817436;
console.log( Number(numero1).toFixed(4) );
console.log( numero2.toFixed(4) );


// console.log(dato);

// console.log(numero1 - numero2);