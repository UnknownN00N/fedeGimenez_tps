const fs = require ("fs");
const bicicletasJSON = fs.readFileSync("./bicicletas.json", "utf-8")
let JSONParseado = JSON.parse(bicicletasJSON);


module.exports = JSONParseado;

//MicroDesafio1