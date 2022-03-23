

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
    console.log(req.body)
    let article = JSON.parse(req.body.article)
    let imageUrl = null
    if(req.file){
        imageUrl = `${req.protocol}://${req.get('host')}/api/images/${req.file.filename}`
    }
    let data = [ article.content, imageUrl,  article.userid, article.title ];
   console.log(req.body)
    db.query("INSERT INTO article ( content, imageUrl,userid, title) VALUES (?, ?, ?, ?  )",
    data, (err,result,fields) =>{
        if(!err){
            const newarticle= {
                id:result.insertId,
                title:article.title,
                content:article.content,
                imageUrl:imageUrl,
                userid:article.userid,
                date:new Date(),
            }
            res.json(newarticle);
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
    
    let article = JSON.parse(req.body.article)
    let newImageUrl=article.imageUrl;
    if (req.file){
        newImageUrl= `${req.protocol}://${req.get('host')}/api/images/${req.file.filename}`

    }
    db.query("UPDATE article SET content = ?, title = ?, imageUrl = ? WHERE id = ?",
    [article.content, article.title, newImageUrl, article.id],
    (err, result, fields) =>{
        if (!err) {
            res.json({message:"update successfully", imageUrl:newImageUrl});
        } else {
            res.status(500).json(err)
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

