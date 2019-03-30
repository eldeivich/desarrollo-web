
descargarUsusarios(30);

function descargarUsusarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;


// llamado a fetch
fetch(api)
    .then(respuesta => respuesta.json() )
    //.then(datos => console.log(datos.results) );
    .then(datos => imprimirHTML( datos.results ) );
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        console.log(usuario);
        const li = document.createElement("li");

        const { name: {first}, name: { last }, picture: {medium}, nat, email  } = usuario;

        li.innerHTML = `
            Nombre: ${first} ${last}<br>
            País: ${nat}<br>
            E-Mail: ${email}<br>
            Imagen: <img src="${medium}">
            
        
        `;


        document.querySelector("#app").appendChild(li);
    });
}