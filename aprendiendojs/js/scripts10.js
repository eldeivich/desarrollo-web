
//function declaration
function saludar(nombre = "Visitante",trabajo = "No sabemos!"){
    console.log("Hola " + nombre + " tu trabajo es " + trabajo);
}

saludar();
saludar("Pedro", "Médico");
saludar("Alejandra", "Veterinaria");
saludar("Laura");


//function expression
const suma = function(a = 0, b = 0){
    console.log( a + b);
}

suma();
suma(30, 50);
suma(100, 200);

// IIFE
(function(tecnologia) {
    console.log("AQUI ESTOY!! aprendiendo " + tecnologia);
})("JavaScript");

//Me quedo en la clase 199