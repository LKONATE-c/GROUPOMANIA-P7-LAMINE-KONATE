
const db = require("../models/db");


exports.getall  = (req, res, next)=>{
   
    db.query("SELECT * from article", (err, result, fields)=>{
        if (err) {
            res.status(400).json(err);
        
        } else{
            res.status(200).json(result)
        }
       
    })
}

exports.getone =  (req, res, next)=>{
    db.query("SELECT * from article WHERE id =?",[req.params.id], (err, result, fields)=>{
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
    let data = [ req.body.content, req.body.image, req.body.userid ];
   console.log(req.body)
    db.query("INSERT INTO article ( content, image,userid) VALUES (?, ?, ?  )",
    data, (err,results,fields) =>{
        if(!err){
            res.json(results);
        }else {
            console.log(err);
            res.json(err);
        }
    })

}

exports.delete =(req, res, next) =>{
    db.query("DELETE FROM article WHERE id =?",
    [req.params.id], (err, result, fields)=>{
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
    (err, result, fields) =>{
        if (!err) {
            res.json("update successfully");
        } else {
            console.log(err)
        }
    })
}
exports.getArticleByUser = (req,res)=>{
    db.query("SELECT * FROM article WHERE userid= ?",[req.params.userid],
    (err,result,filed) =>{
        if(!err) {
            res.json(result);
        }else {
            res.json(err)
        }
    }
    
    )
}