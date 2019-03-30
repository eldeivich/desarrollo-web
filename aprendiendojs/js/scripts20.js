// un arreglo

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

//un arreglo con objetos

const carrito = [
    {id: 1, producto: "Libro"},
    {id: 2, producto: "Camisa"},
    {id: 3, producto: "Disco"}
];

// un Objeto
let automovil = {
    modelo: "Camaro",
    motor: 6.0,
    anio: 1967,
    marca: "Chevrolet"
}

//for(let i = 0; i < pendientes.length; i++) {
//    console.log(pendientes[i]);
//}

//for(pendiente of pendientes) {
//    console.log(pendiente);
//}

//for(producto of carrito) {
//    console.log(producto.producto);
//}

//for(info of Object.values(automovil)) {
//    console.log(info);
//}

//pendientes.forEach(function(pendiente) {
//    console.log(pendiente);
//})

pendientes.map(tarea => {
    console.log(tarea);
})