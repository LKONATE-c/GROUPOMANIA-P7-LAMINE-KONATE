//module npm qui charge les variables d'environement
require('dotenv').config();
const mysql = require('mysql2');


//CONNEXION BASE DE DONNEES
const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,

});
db.connect((error) => {
    if (error) {
        console.log(error)

    }else {
        console.log("mysql connect")
    }
 })
 
 module.exports = db;