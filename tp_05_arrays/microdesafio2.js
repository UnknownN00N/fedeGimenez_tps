let conjuntoPeliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"]

function pelisaVer(pelicula) { //funcion de priorizacion de una peli elegida, puesta además en mayuscula
    let lugarPeli = conjuntoPeliculas.indexOf(pelicula)
    let Mayus = conjuntoPeliculas[lugarPeli].toUpperCase()
    let puestaInvisible = conjuntoPeliculas.unshift(Mayus)
   
    let lugarPeli2 = conjuntoPeliculas.indexOf(pelicula)
    let quitaFinal = conjuntoPeliculas.splice(lugarPeli2, 1)


    return console.log(conjuntoPeliculas);
}

pelisaVer("Top gun maverick")

let pelisaEstrenar = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"]
let peliExcluida = pelisaEstrenar.shift() //exclusión el string no deseado


function unionArrays(array1, array2) { //función de unión de dos arrays en uno nuevo
    let PelisUnidas = array1.concat(array2)
    return console.log(PelisUnidas);
}

unionArrays(conjuntoPeliculas, pelisaEstrenar)