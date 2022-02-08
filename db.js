const { promisify } = require('util');
const mysql = require('mysql');
const dump = require('mysqldump');

const db = mysql.createPool({
    user: 'user',
    password: 'password',
    host: '127.0.0.1',
    database: 'db'
});

db.getConnection((err, connection)=>{
    if(err){
        console.log(err);
        console.log("DATABASE NOT CONNECTED!", connection);
    }else{
        console.log('DATABASE CONNECTED!');
    }
});

db.query = promisify(db.query);

module.exports = db;