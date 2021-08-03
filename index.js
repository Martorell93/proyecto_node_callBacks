//Importo ambas librerías
const preguntas = require("./questions");
const escritura = require("./lecturaArchivo");

//Llamo a las funciones
preguntas.preguntas("persona.json", escritura.escrituraJSON);
