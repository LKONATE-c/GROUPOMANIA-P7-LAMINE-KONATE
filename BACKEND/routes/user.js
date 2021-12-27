const express = require("express");
const Router = express.Router();
const db = require("../models/db.js");

Router.get("/all", (req, res, next)=>{
   
    db.query("SELECT * from user",(err, rows, fields)=>{
        res.json(rows);
    })
    
    

})
Router.get("/user/:id", (req, res, next)=>{
    db.query("SELECT * from user WHERE id =?",[req.params.id], (err, rows, fields)=>{
        if(!err)
            {
                res.json(rows);
            }
            else
            {
                console.log(err);
            }
    })

})
Router.post("/", (req, res, next) =>{
    let data = [ req.body.firstname, req.body.lastname, req.body.email, req.body.password ];
    db.query("INSERT INTO user ( firstname, lastname, email, password  ) VALUES (?, ?, ?, ? )",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })

})


Router.delete("/article/:id", (req, res, next)=>{
    db.query("DELETE FROM user WHERE id =?",
    [req.params.id], (err, rows, fields)=>{
        if(!err)
            {
                res.json("deleted successfully.");
            }
            else
            {
                console.log(err);
            }
    })

   Router.put('/update', (req,res, next)=>{
       db.query("UPDATE SET user firstname = ?, lastname = ?, password = ?, WHERE id = ?",
       [req.body.firstname, req.body.lastname, req.body.password, req.body.id],
       (err, rows, fields) =>{
           if (!err) {
               res.json("update successfully");
           } else {
               console.log(err)
           }
       })
   })
    
    });



module.exports = Router;