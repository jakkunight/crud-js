const db = require('../db');

const crud = {
    contextTable: "test",
    setContextTable: async (table) => {},
    getContextTable: async () => {},
    readTable: async  (table) => {},
    createRow: async  (table, row) => {},
    updateRow: async  (table, id, row) => {},
    deleteRow: async  (table, id) => {},
};

module.exports = crud;