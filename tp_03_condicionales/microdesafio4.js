/* Mi primera calculadora */

let operador = "/";
let num1 = 2;
let num2 = 3;

switch (operador) {
    case "+": 
    resultado = num1 + num2
        
        break;

    case "-": 
    resultado = num1 - num2
    break;

    case "*":
    resultado = num1 * num2
    break;

    case "/":
        resultado = num1 / num2
        break;
    default:
        resultado = "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir"
        break;
}

console.log(resultado);