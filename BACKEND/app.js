const express = require("express");
const helmet = require ("helmet");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql2");

 // Appel express
 const app = express();

 const db = mysql.createConnection({
     host:process.env.DB_HOST,
     user:process.env.DB_USER,
     password:process.env.DB_PASSWORD,
     database:process.env.DB_NAME,

 });

 db.connect((error) => {
    if (error) {
        console.log(error)

    }else {
        console.log("mysql connect")
    }
 })
 //methode securité helmet
 app.use(helmet());

 //CONFIG DU CORS
app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
 next();
});

app.use(express.json());

module.exports = app;