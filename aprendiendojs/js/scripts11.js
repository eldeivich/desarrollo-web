// Métodos
const musica = {
    reproducir: function(cancion){
        console.log("Reproduciendo la canción: " + cancion);
    },
    pausar: function() {
        console.log("Paused...");
    }
}
//los metodos tamobien puede ir por fuera
musica.borrar = function(id) {
    console.log("Borrando la canción con el ID : " + id);
}



musica.reproducir("Hotel California");
musica.reproducir("Nothing Else Matters");
musica.pausar();
musica.reproducir("Sirena Varada");
musica.borrar(121);