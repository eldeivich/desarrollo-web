const personas = [
    {nombre: "Juan", edad: 20},
    {nombre: "Pablo", edad: 50},
    {nombre: "Alejandra", edad: 23, aprendiendo: "JavaScript"},
    {nombre: "Karen", edad: 28},
    {nombre: "Miguel", edad: 33}
];

// obtener las personas mayores de 25 años
//const mayores = personas.filter(persona => {
//    return persona.edad > 25
//});

// Arrow function
const mayores = personas.filter(persona => persona.edad > 25 );

console.log(mayores);

// Extraer informacion de Alejandra

//const alejandra = personas.find(persona => {
//    return persona.nombre === "Alejandra"
//});

// Arrow Function
const alejandra = personas.find(persona => persona.nombre === "Alejandra");

console.log(alejandra);

let {aprendiendo} = alejandra;

console.log(aprendiendo);

// reduce
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / personas.length );