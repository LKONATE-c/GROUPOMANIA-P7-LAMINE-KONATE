
const db = require("../models/db");




//recuperer tous les likes/dislikes
exports.getall = (req, res, next)=>{
   
    db.query("SELECT * from likes",(err, rows, fields)=>{
        res.json(rows);
    })
}

//récupérer un like/dislike
exports.getone = (req, res, next)=>{
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

}

//liker un article
exports.add = (req, res, next) =>{
    let data = [ req.body.content,  req.body.like];
    db.query("INSERT INTO likes (id) VALUES (?)",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })

}

exports.delete = (req, res, next)=>{
    db.query("DELETE FROM likes WHERE LikID =?",
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

exports.update = (req,res, next)=>{
    db.query("UPDATE SET likes  WHERE id = ?",
    [ id],
    (err, rows, fields) =>{
        if (!err) {
            res.json("update successfully");
        } else {
            console.log(err)
        }
    })
}
 
 

