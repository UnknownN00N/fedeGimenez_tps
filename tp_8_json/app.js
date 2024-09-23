const bicicletas = require("./datosBici.js");

let dhBici = bicicletas;

//MicroDesafio2

function buscarBici(id) {
    dhBici.filter (id => id >= dhBici.length )
    console.log(dhBici[id-1] || null);
}

buscarBici(10)

 
 function venderBici(id) {
    let bicicleta = dhBici.find (bici => bici.id === id);
        
        if (bicicleta) {
            
         console.log( bicicleta.vendida);
         console.log(bicicleta);
        }
           else{
           console.log("Bicicleta no encontrada"); 
        }
    }

venderBici(2)


function biciParaLaVenta() {
    dhBici.filter((dhBici) => {
        if(dhBici.vendida === "no"){
            console.log(dhBici); 
        }  
    })}

biciParaLaVenta()

function totalDeVentas() {
    let bicicletasVendidas = dhBici.filter (bici => bici.vendida === 'si');
    let precios = bicicletasVendidas.map(bici => bici.precio);
    let totalVentas = precios.reduce((acum, precio) => acum + precio, 0);
    console.log(totalVentas);
    };

totalDeVentas()

//Extra


function biciPorRodado(numeroRodado) {
    let bicisRodados = dhBici.filter(bici => bici.rodado === numeroRodado);
    console.log(bicisRodados);
}
biciPorRodado(26)

function aumentoBici(porcentaje) {
    
    dhBici.map(bici => {
        bici.precio = bici.precio * (1 + porcentaje / 100); 
    });

    console.log(dhBici);
    return dhBici;
}

aumentoBici(20);


function listarTodasLasBicis() {
    dhBici.forEach(function(bici, index){
        console.log(`${index + 1}.- ${dhBici[index].marca}`);
    
})}
listarTodasLasBicis()