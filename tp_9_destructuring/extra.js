let numeros = [4, 10, 15, 7, 9, 24, 45, 39, 88, 100];

let [cuatro, , quince, , nueve] = numeros;

let numeros2 = [...numeros.filter(numero => numero !== cuatro && numero !== quince && numero !== nueve)];

console.log(numeros2);

let mascota = {
    nombre : "Jonah",
    tipo : "Perro",
    color : "Blanco",
    raza : "Siberiano"
}

let {nombre, tipo, color, raza} = mascota;

console.log(`color: ${color} y su raza es: ${raza}.`);