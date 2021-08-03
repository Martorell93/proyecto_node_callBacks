//Importo librería readline
const readline = require("readline");
const { callbackify } = require("util");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntas(path, callback) {
    let persona = {
        "name": "",
        "surname": "",
        "age": 0
    }
    rl.question("¿Nombre?: ", function(answer1) {
        rl.question("¿Apellido?: ", function(answer2) {
            rl.question("¿Edad?: ", function(answer3) {
                persona.name = answer1;
                persona.surname = answer2;
                persona.age = answer3;
                rl.close();
                callback(path, persona);
            });
        });
    });
    return persona;
}

module.exports = {preguntas};