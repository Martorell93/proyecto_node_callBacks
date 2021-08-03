//Importo librería
const fs = require("fs");

//Declaro la función

function escrituraJSON(path, persona) {
    fs.writeFile(path, JSON.stringify(persona, null, 2), () => {
        fs.readFile(path, (err, data) => {
            const lectura = JSON.parse(data);
            console.log(lectura);
        })
    })
}

module.exports = {escrituraJSON};