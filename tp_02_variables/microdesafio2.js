let nombre = "José";
let apellido = "Pérez";
let sueldoActual = 55000;
let porcentajeAumento = 45;
let calculoAumento = (sueldoActual * porcentajeAumento/ 100);
let nuevoSueldo = calculoAumento + sueldoActual;

console.log(`
    Hola, estimad@ ${nombre} ${apellido} 

    En base a su sueldo actual $${sueldoActual}

    Ha recibido un aumento del ${45}%:

    $${calculoAumento}

    y su nuevo sueldo es de: $${nuevoSueldo}.`);