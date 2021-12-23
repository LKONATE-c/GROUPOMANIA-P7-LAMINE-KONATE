const express = require("express");
const Router = express.Router();
const mysql = require('mysql2');


Router.get("/article", (req, res)=>{
    mysql.createConnection.query("SELECT * from article", (err, rows, fields)=>{
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
Router.get("/article/:id", (req, res)=>{
    mysql.createConnection.query("SELECT * from article WHERE ArtID =?",[req.params.id], (err, rows, fields)=>{
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
Router.delete("/article/:id", (req, res)=>{
    mysql.createConnection.query("DELETE FROM article WHERE ArtID =?",
    [req.params.id], (err, rows, fields)=>{
        if(!err)
            {
                res.send("deleted successfully.");
            }
            else
            {
                console.log(err);
            }
    })

})

module.exports = Router;