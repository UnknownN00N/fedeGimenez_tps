/* Funcion cálculo del monto a pagar por alquiler de vehículo */

function montoaPagar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    let valor;
    valor = 0;

    let mensaje = "";
    
        switch (tipoDeVehiculo) {
            case "Compacto":
                 valor = 14000;
                break;

            case "Mediano":
                valor = 17000;
                break;

            case "Camioneta":
                 valor = 28000;
                break;
        
            default:
                break;
        }
        let valorTotal;
        valorTotal = valor * diasDeAlquiler;

     if (sillaParaBebe == true) {
        valorTotal = valorTotal + 1200
        mensaje = `
        Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,
        considerando los ${diasDeAlquiler} día(s) utilizados, y la silla para niños, 
        el monto total a pagar es de $${valorTotal}`;

     } else {
        mensaje = `
    Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado y
    considerando los ${diasDeAlquiler} día(s) utilizados, 
    el monto total a pagar es de $${valorTotal}`;
     }
     
         return console.log(mensaje);
        


}

montoaPagar("Compacto", 2, true)