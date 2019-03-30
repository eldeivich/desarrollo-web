
let dinero = 600;
let totalCarrito = 500;
let tarjeta = false;

//if(dinero > totalCarrito || tarjeta) {
//    console.log("Pago Correcto");
//} else {
//    console.log("Fondos insuficientes");
//}

let hora = 25;

if(hora > 0 && hora <= 12) {
    console.log("Buenos días");
} else if(hora > 12 && hora <= 18) {
    console.log("Buenas tardes");
} else if(hora > 18 && hora <=24) {
    console.log("Buenas Noches");
}else {
    console.log("Horario no válido");
}