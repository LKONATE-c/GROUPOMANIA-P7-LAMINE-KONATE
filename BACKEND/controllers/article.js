

const db = require("../models/db");


exports.getall  = (req, res, next)=>{
   console.log(req.auth)
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
                res.status(200).json(result[0]);
            }
            else
            {
                res.status(400).json(err);
            }
    })
} 

exports.add = (req, res, next) =>{
    let data = [ req.body.content, req.body.image, req.body.userid, req.body.title ];
   console.log(req.body)
    db.query("INSERT INTO article ( content, image,userid, title) VALUES (?, ?, ?, ?  )",
    data, (err,result,fields) =>{
        if(!err){
            const article= {
                id:result.insertId,
                title:req.body.title,
                content:req.body.content,
                image:req.body.image,
                userid:req.body.userid,
            }
            res.json(article);
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

exports.update = (req,res, next)=>{
    console.log(req.body)
    db.query("UPDATE article SET content = ?, title = ? WHERE id = ?",
    [req.body.content, req.body.title, req.body.id],
    (err, result, fields) =>{
        if (!err) {
            res.json("update successfully");
        } else {
            res.json(err)
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

