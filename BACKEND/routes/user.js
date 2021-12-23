const express = require("express");
const Router = express.Router();
const mysql = require('mysql2');



Router.get("/user", (req, res)=>{
    mysql.createConnection.query("SELECT * from user", (err, rows, fields)=>{
        if(!err)
            {
                res.send(rows);
            }
            else
            {
                console.log(err);
            }
    })

})


module.exports = Router;