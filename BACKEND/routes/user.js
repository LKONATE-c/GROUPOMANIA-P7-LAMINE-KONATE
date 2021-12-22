const express = require ("express");
const Router = express.Router();



Router.get("/", (req,res)=>{
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