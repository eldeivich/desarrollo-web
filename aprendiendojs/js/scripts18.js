//switch statment

const metodoPago = "efectivo";

switch(metodoPago) {
    case "efectivo":
        hola();
        break;
    case "cheque":
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos`);
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago} espere un momento..`);
        break;
    default:
        console.log("Aún no has pagado o método no válido");
        break;
}


function hola() {
    console.log("Hola amigos");
}

// siguiente clase 206