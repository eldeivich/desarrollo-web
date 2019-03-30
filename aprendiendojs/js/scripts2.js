let banda = "Metallica", 
    cancion = "Enter Sandman";

let nombre;

nombre = banda + ": " + cancion;


// length nos dice cuantas letras tiene una variable
console.log(banda.length);

// concart
nombre = nombre.concat(" ", "y es genial");

// todas mayusculas
nombre = nombre.toUpperCase();

// todas minusculas
nombre = nombre.toLowerCase();

//Split va a dividir una cadena de texto
let actividad = "Estoy aprendiendo JavaScript con el curso";

nombre = actividad.split (" ");

let intereses = "Leer, caminar, escuchar musica, escribir, aprender a programar";

nombre = intereses.split(", ");

//reemplazar un script

//nombre = actividad.replace("JavaScript", "JS");

//includes revisa que algo exista
nombre = actividad.includes("JavaScript");

let email = "correo@correo.com";
nombre = email.includes("@");



// console.log(nombre);

let master = "Master ",
    puppets = "Of Puppets";

console.log(master.repeat(3));
console.log(puppets);