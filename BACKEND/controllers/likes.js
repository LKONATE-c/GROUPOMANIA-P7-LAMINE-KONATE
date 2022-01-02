
const db = require("../models/db");


exports.like = (req, res, next) => {
    // TOUT LES POST DU DERNIER AU PREMIER
    db.query = "SELECT * FROM article.like;";
    (sql, function (err, results) {
        if (err) res.status(400).json({ err });
        let userLiked = false;
        for (const result of results) {
            if (req.body.userId == result.userId && req.body.articleId == result.articleId) {
                userLiked = true;
            }
        }
        if (!userLiked) {
            let sql = `UPDATE post SET article.like = article.like + 1 WHERE articleId=?;`;
            pool.execute(sql, [req.body.articleId], function (err, result) {
                if (err) res.status(400).json({ err });
                let sql2 = `INSERT INTO article.like (articleId, userId) VALUES (?,?);`;
                pool.execute(sql2,[req.body.articletId, req.body.userId], function (err, result) {
                    if (err) res.status(400).json({ err });
                    res.status(200).json(result)
                });
            });
        } else {
            let sql = `UPDATE post SET article.like = post.like - 1 WHERE postId=?;`;
            pool.execute(sql,[req.body.articleId], function (err, result) {
                if (err) res.status(400).json({ err });
                let sql2 = `DELETE FROM article.like l WHERE l.postId = ? AND l.userId = ?`;
                pool.execute(sql2,[req.body.articleId,req.body.userId], function (err, result) {
                    if (err) res.status(400).json({ err });
                    res.status(200).json(result)
                });
            });
        }
    });
}

exports.liked = (req, res, next) => {
    let sql2 = `SELECT articletId FROM article.like WHERE userId = ?`;
    pool.execute(sql2,[req.body.userId], function (err, result) {
        if (err) res.status(400).json({ err });
        res.status(200).json(result)
    });
}

/*/recuperer tous les likes/dislikes
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
}*/
 
 

