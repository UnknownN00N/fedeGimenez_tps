/* Aterrizar avión
*/

let velocidad = 278;
let altura = 150;
let mensaje = "";

if (altura>=150 && altura<=300 && velocidad>=268 && velocidad<=278) {
    mensaje = "El avión está listo para aterrizar";
} else {
   mensaje = "El avión no puede iniciar el aterrizaje, su velocidad debe estar entre 268 a 278 km/hr y su altura entre 150m a 300m"
}

console.log(mensaje);