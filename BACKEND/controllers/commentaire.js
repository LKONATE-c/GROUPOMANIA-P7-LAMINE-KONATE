const db = require("../models/db");


exports.getall  = ("/all", (req, res, next)=>{
   
    db.query("SELECT * from commentaire",(err, rows, fields)=>{
        res.json(rows);
    })

})

exports.getone = ("/article/:id", (req, res, next)=>{
    db.query("SELECT * from commentaire WHERE ArtID =?",[req.params.id], (err, rows, fields)=>{
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

exports.add = ("/", (req, res, next) =>{
    let data = [req.body.id, req.body.content, req.body.userid, req.body.user_id,];
    db.query("INSERT INTO article (id, content, userid, user_id) VALUES (?, ?, ?, ?)",
    data, (err,rows,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
        }
    })
})

exports.delete = (req, res, next)=>{
    db.query("DELETE FROM article WHERE ComID =?",
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

    exports.update = ('/update', (req,res, next)=>{
        db.query("UPDATE SET commentaire content = ?, WHERE id = ?",
        [content,  id],
        (err, rows, fields) =>{
            if (!err) {
                res.json("update successfully");
            } else {
                console.log(err)
            }
        })
    })
     
     