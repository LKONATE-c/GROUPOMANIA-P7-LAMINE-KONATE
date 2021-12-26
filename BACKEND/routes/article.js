const express = require("express");
const Router = express.Router();
const db = require("../models/db.js");





Router.get("/all", (req, res, next)=>{
   
    db.query("SELECT * from article",(err, rows, fields)=>{
        res.json(rows);
    })
    
    

})
Router.get("/article/:id", (req, res, next)=>{
    db.query("SELECT * from article WHERE ArtID =?",[req.params.id], (err, rows, fields)=>{
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
Router.post("/", (req, res, next) =>{
    let data = [req.body.id, req.body.content, req.body.image, req.body.create-date,req.body.like];
    db.query("INSERT INTO article (id, content, image, create-date, like) VALUES (?, ?, ?, ?, ?)",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })

})


Router.delete("/article/:id", (req, res, next)=>{
    db.query("DELETE FROM article WHERE ArtID =?",
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

   Router.put('/update', (req,res, next)=>{
       db.query("UPDATE SET article content = ?, image = ?, WHERE id = ?",
       [content, image, id],
       (err, rows, fields) =>{
           if (!err) {
               res.send("update successfully");
           } else {
               console.log(err)
           }
       })
   })
    
    });



module.exports = Router;