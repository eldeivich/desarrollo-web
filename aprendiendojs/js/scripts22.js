// Destructuring

const cliente = {
    nombre: "Alejandra",
    tipo: "Premium",
    datos : {
        ubicacion: {
            ciudad: "México",
            pais: "México"
        },
        cuenta: {
            desde: "10-12-2012",
            saldo: 4000
        }
    },
    gustos: {
        musica: ["trance", "rock"]
    }
}

console.log(cliente);

// crear la variable
// forma anterior
const nombreCliente = cliente.nombre,
      tipoCliente = cliente.tipo,
      ubicacionCliente = cliente.datos.ubicacion;




// forma nueva
let {nombre, tipo} = cliente;
let {datos: {ubicacion: {ciudad} } } = cliente;
let {datos: {cuenta: {saldo} } } = cliente;
let {gustos: musica } = cliente;

console.log(musica);

console.log(saldo);
console.log(ciudad);

console.log(tipo);