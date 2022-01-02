
const db = require("../models/db");


exports.getall  = (req, res, next)=>{
   
    db.query("SELECT * from article", (err, rows, fields)=>{
        if (err) res.status(400);json({ err });
        res.status(200).json(result)
    })
}

exports.getone =  (req, res, next)=>{
    db.query("SELECT * from article WHERE id =?",[req.params.id], (err, rows, fields)=>{
        if(!err)
            {
                res.status(200).json(result);
            }
            else
            {
                res.status(400).json(err);
            }
    })
} 

exports.add = (req, res, next) =>{
    let data = [ req.body.content, req.body.image, req.body.like];
    db.query("INSERT INTO article ( content, image, like) VALUES (?, ?, ?  )",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })

}

exports.delete =(req, res, next) =>{
    db.query("DELETE FROM article WHERE id =?",
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
}

exports.upadate = (req,res, next)=>{
    db.query("UPDATE SET article content = ?, image = ?, WHERE id = ?",
    [req.body.content, req.body.image, req.body.id],
    (err, rows, fields) =>{
        if (!err) {
            res.json("update successfully");
        } else {
            console.log(err)
        }
    })
}
