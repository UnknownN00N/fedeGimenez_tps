/* 1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares. Pista:
Investiga sobre el uso del operador módulo. Recordemos también que un número
par es aquel que se puede dividir entre 2.
*/

function Funcion(Parametro) {
    let valor = 1
    while (valor <= 10) {
        console.log(`
Sumatoria del número a los 10 siguientes:        
${Parametro + valor}`);
        valor++;
    }
}

Funcion(2)

function tresEnTres() {
    let valor = 1
    while (valor<=57) {
        console.log("Imprimiendo el número: " + valor);
        valor += 3
    }
}

tresEnTres()

function letrasMayusculas(parametro) {
   let parametroMayus = parametro.toUpperCase()
   let parametroLugar = parametroMayus.length
   let valor = 0
   while (valor<=(parametroLugar-1)) {
    console.log(parametroMayus[valor]);
    valor++
   }
    
}

letrasMayusculas("Holaaa")

function valorPar(num) {
    let valor = 0
    let longe = num.length
    let nuevoArray = [];
    for (let i = 0; i < longe; i++) {
        let parseo = +num[i]
       let separadorPar = parseo % 2;
       if (separadorPar === 0) {
        nuevoArray.push(parseo)
        
       }
       
        
        
    }
   console.log(nuevoArray);
}

valorPar([22, 23, 25, 24, 4])