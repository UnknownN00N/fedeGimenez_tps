const catalogo = require("./peliculas.js") //Microdesafio1
let fs = require("fs"); //Microdesafio2




function Lista() { //Listado de películas favoritas
    
    for (let i = 0; i < catalogo.length; i++) {
        const element = catalogo[i];
        console.log(`
        ${catalogo[i].id}
        ------------------
        Rating: ${catalogo[i].rating}
        Premios: ${catalogo[i].awards}
        Duración: ${catalogo[i].length} hs
        Precio: ${catalogo[i].price}
        Género: ${catalogo[i].genre} `
        );
    }
}

Lista()

fs.readFile("mensaje.txt", "utf-8", (err, data) => { //Lectura del archivo mensaje.txt
    if (err){
        console.log("error: ", err);
    } else {
        console.log(data);
    }
});