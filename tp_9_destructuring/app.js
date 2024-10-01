const importar = require("./collectibles.js");


let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figura: unifiedCollectibles,
    listFigures : function () {
        unifiedCollectibles.forEach(figura => {
            console.log(`
            figura: ${figura.nombre}
            marca: ${figura.marca}
            precio: $${figura.precio}
            stock: ${figura.stock}
            ----------------------------`);
        });
    },
    figuresByBrand : function (marca) {
       let filtrado = unifiedCollectibles.filter(figura => figura.marca === marca)
        console.log(filtrado);
    }
}

collectibles.listFigures()

collectibles.figuresByBrand("Hot Toys")