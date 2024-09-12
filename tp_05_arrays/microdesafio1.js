let electrodomesticos = ["Heladera", "Microondas", "Acondicionado", "Televisor", "Anafe", "Batidora"] //Array de 6 elementos


console.log(electrodomesticos[2]); //Acceso a cualquier elemento del Array, en este caso el del la posic. 2


let electrodomesticosPuesta = electrodomesticos.push(electrodomesticos[0]);
let electrodomesticosQuita = electrodomesticos.shift(); 

console.log(electrodomesticos); //Extrae el primer elemento del array y lo agrega al final del mismo


let electrodomesticosNuevo = electrodomesticos.splice(3, 0, "Ventilador", "Lámpara")

console.log(electrodomesticos); //Agrega al final del array dos (2) nuevos productos.


console.log(electrodomesticos.length); //Muestra por la consola la cantidad de elementos que contiene el array.


let busquedaArray; //Busca un elemento del array y crea una condición en el caso de encontrarlo o no
let mensaje = "";
busquedaArray = electrodomesticos.includes("Heladera")
if (true) {
    mensaje = "Producto encontrado";
} else {
    mensaje = "El producto no existe";
}

console.log(mensaje); 


let SeparadosPorEspacio = electrodomesticos.join(" ");
console.log(SeparadosPorEspacio); //Unifica los elementos del array en un string y los separa en espacios " "


console.log(SeparadosPorEspacio.length); //Determina la cantidad de elementos que posee la cadena de texto obtenida


let reemplazoPalabras;
reemplazoPalabras = SeparadosPorEspacio.replace("Heladera", "Banana");
console.log(reemplazoPalabras); // Cambia el nombre de algún producto de la cadena de texto por otro


let SeparadosPorComa = reemplazoPalabras.split(" ");
console.log(SeparadosPorComa.join(", ")); //Genera una nueva cadena de texto, esta vez separa con comas.