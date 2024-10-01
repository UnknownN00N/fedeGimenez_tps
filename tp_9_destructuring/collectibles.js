 const fs = require ("fs"); 

    function importar(marca) {
    let figuras1JSON = fs.readFileSync('./coleccionables/datos/figuras1.json', 'utf-8')
    let figuras1Parseadas = JSON.parse(figuras1JSON)
    let figuras2JSON = fs.readFileSync('./coleccionables/datos/figuras2.json', 'utf-8')
    let figuras2Parseadas = JSON.parse(figuras2JSON)
    let figuras3JSON = fs.readFileSync('./coleccionables/datos/figuras3.json', 'utf-8')
    let figuras3Parseadas = JSON.parse(figuras3JSON)

    let figurasFiltradas = []

    figuras1Parseadas.forEach(figura => {
        if (figura.marca === marca) {
            figurasFiltradas.push(figura)
        }
    });
    figuras2Parseadas.forEach(figura => {
        if (figura.marca === marca) {
            figurasFiltradas.push(figura)
        }
    });
    figuras3Parseadas.forEach(figura => {
        if (figura.marca === marca) {
            figurasFiltradas.push(figura)
        }
    });
    return figurasFiltradas;
}


module.exports = importar;