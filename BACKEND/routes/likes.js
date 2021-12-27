const express = require("express");
const Router = express.Router();
const db = require("../models/db.js");





Router.get("/all", (req, res, next)=>{
   
    db.query("SELECT * from likes",(err, rows, fields)=>{
        res.json(rows);
    })
    
    
})

Router.get("/likes/:id", (req, res, next)=>{
    db.query("SELECT * from likes WHERE id =?",[req.params.id], (err, rows, fields)=>{
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
    let data = [req.body.id, req.body.content, req.body.image, req.body.create-date,req.body.like];
    db.query("INSERT INTO like (id) VALUES (?)",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })

})


Router.delete("/like/:id", (req, res, next)=>{
    db.query("DELETE FROM article WHERE LikID =?",
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
       db.query("UPDATE SET like  WHERE id = ?",
       [ id],
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