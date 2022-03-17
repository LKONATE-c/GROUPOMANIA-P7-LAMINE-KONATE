const db = require("../models/db");


exports.getall  = (req, res, next)=>{
    db.query("SELECT * from commentaire where articleid = ?",
  		[req.params.id], (err, result, fields)=>{

      if (err) {
        res.status(400).json(err);

      } else{
        res.status(200).json(result)
      }
  })
}
exports.add =  (req, res, next) =>{
    let data = [ req.body.comment, req.body.userid, req.body.articleid,];
    db.query("INSERT INTO commentaire ( comment, userid, articleid) VALUES (?, ?, ?)",
    data, (err,result,field) =>{
        console.log(result.insertId);
        console.log(field);
        if(!err){
            res.status(200).json({ 
                id:result.insertId,
                comment:req.body.comment,
                userid:req.body.userid,
                articleid:req.body.articleid
            
            });
        }else {
            res.status(400).json(err);
        }
    })
}

exports.delete = (req, res, next)=>{
    console.log("supprime");
    db.query("DELETE FROM commentaire WHERE id =?",
    [req.params.id], (err, result, fields)=>{
        console.log(err);
        if(!err)
            {
                res.status(200).json({message:"deleted successfully."});
            }
            else
            {
                res.status(400).json({message:"error"})
            }
    })
    }

    



       
 



