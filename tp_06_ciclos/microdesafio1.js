let operacionesBancarias = [44000, -12000, -3000, 1000, -2000]
let totalDepositos = 0;
let totalRetiros = 0;

function calcularSaldo(array) {
    for (let i = 0; i < operacionesBancarias.length; i++) {
        if (operacionesBancarias[i]> 0) {
            totalDepositos += operacionesBancarias[i]
        } else {
            totalRetiros += operacionesBancarias[i]
        };
        
    }
    let saldoActual = totalDepositos + totalRetiros;

   return {totalDepositos,
        totalRetiros,
        saldoActual};
       
    
};


function resumenDeCuenta(nombre, apellido, array) {
   let { totalDepositos, totalRetiros, saldoActual} = calcularSaldo(array);
   console.log(`
   Estimad@ ${nombre} ${apellido}:
   El monto total de los depósitos es de: ${totalDepositos}
   El monto total de los retiros es de: ${totalRetiros}
   Por lo tanto, su saldo actual en la cuenta es de: ${saldoActual}`);
}
resumenDeCuenta("José", "Hernández", operacionesBancarias)