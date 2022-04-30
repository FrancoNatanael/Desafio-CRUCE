const fs = require('fs');
const path = require('path');



const modelController = function (name) {

    return {
        tablePath: path.resolve(__dirname, '../data/', `${name}.Json`),

           
        readFile: function () {
            let tableContents = fs.readFileSync(this.tablePath, 'utf-8');
            return JSON.parse(tableContents) || [];
        },
        
        writeFile: function (contents) {
            let tableContents = JSON.stringify(contents, null, ' ');
            fs.writeFileSync(this.tablePath, tableContents);
        },
        
        all: function () {
            return this.readFile();
        },


    }
}

module.exports = modelController