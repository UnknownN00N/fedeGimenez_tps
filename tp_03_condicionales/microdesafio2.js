/* Ajuste tarifario de energia eléctrica */


let pagoMes = 12000;
let consumoKWH = 450;
let pagoAumento = (pagoMes / 100) * 20 + pagoMes
let mensaje = "";

(consumoKWH > 300) ? mensaje = `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en
base al ajuste tarifario (hogares con consumo mayor a 300kwh por
mes tendrán un aumento del 20%), cumplimos con informarle que se
ha ajustado el total a pagar, que será de $${pagoAumento}` : mensaje = "Su saldo a pagar con subsidio es de $" + pagoMes;

console.log(mensaje);