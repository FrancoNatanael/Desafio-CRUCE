
const fs = require('fs');
const path = require('path');
// Recibo por parámetro la entidad para reutilizarlo


const modelController = function (name) {

    return {
        tablePath: path.resolve(__dirname, '../data/', `${name}.Json`),

        // Leo el archivo Json y lo transformo en Array de objeto literal     
        readFile: function () {
            let tableContents = fs.readFileSync(this.tablePath, 'utf-8');
            return JSON.parse(tableContents) || [];
        },
        // Grabo el array que recibo por parámetro y lo paso a formato Json
        writeFile: function (contents) {
            let tableContents = JSON.stringify(contents, null, ' ');
            fs.writeFileSync(this.tablePath, tableContents);
        },
        // Leo todos los registros del archivo
        all: function () {
            console.log('Estoy buscando los productos ahora')
            console.log(this.readFile())
            return this.readFile();
        },


    }
}

module.exports = modelController