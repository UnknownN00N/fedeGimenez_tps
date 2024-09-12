function TablaDeMultiplicar(numer) {
    console.log(`
Tabla de multiplicar
--------------------`);
    let numero = 1
    while (numero <= 10) {
        console.log(`${numer} * ${numero} = ${numer*numero}`);
        numero++;
    }
}
TablaDeMultiplicar(2)