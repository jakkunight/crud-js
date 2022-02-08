const db = require('../db');

const crud = {
    contextTable: "test",
    setContextTable: async (table) => {
        if(table && typeof table === "string"){
            this.contextTable = table;
            return 0;
        }else{
            return -1;
        }
    },
    getContextTable: async () => {
        return this.contextTable;
    },
    readTable: async  (table) => {
        if(table && typeof table === "string"){
            const rows = await db.query("");
            if(rows){
                console.log("[readTable]", rows);
                return rows;
            }else{
                console.error("[readTable] ERROR READING THE TABLE");
                return -1;
            }
        }
    },
    createRow: async  (table, row) => {},
    updateRow: async  (table, id, row) => {},
    deleteRow: async  (table, id) => {},
};

module.exports = crud;