const fs = require('fs');
const path = require('path');



const modelController = function (name) {

    return {
        tablePath: path.resolve(__dirname, '../data/', `${name}.Json`),

           
        readFile: function () {
            let tableContents = fs.readFileSync(this.tablePath, 'utf-8');

            return JSON.parse(tableContents) || [];
        },        
        all: function () {
            return this.readFile();
        },
        nextId: function () {
            let rows = this.readFile();
            let lastRow = rows.pop();

            return lastRow.id ? ++lastRow.id : 1;
        },
        create: function (row) {
            let rows = this.readFile();
           
            rows.push(row);
            
            this.writeFile(rows);
            
            return row.id;
        },


    }
}

module.exports = modelController