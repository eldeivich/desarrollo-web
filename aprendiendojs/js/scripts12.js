
//function declaration
//saludar();
//saludar("Pedro", "Médico");
//saludar("Alejandra", "Veterinaria");
//saludar("Laura");


//function saludar(nombre = "Visitante",trabajo = "No sabemos!"){
//    console.log("Hola " + nombre + " tu trabajo es " + trabajo);
//}

//function expression
//const suma = (a = 0, b = 0) => a + b;
//const multiplicar = a => a * 5;

//let total;

//let resultadoSuma = suma(1 , 3);
//total = multiplicar(resultadoSuma);

//console.log(total);


//Arrow functions

let viajando = destino =>  "Viajando a la ciudad de " + destino;
// La linea de arriba es lo mismo que:
//let viajando = function(destino) {
//     return "Viajando a la ciudad de " + destino;
//}

let viaje;
viaje = viajando("Londres");
viaje = viajando("París");

console.log(viaje);
