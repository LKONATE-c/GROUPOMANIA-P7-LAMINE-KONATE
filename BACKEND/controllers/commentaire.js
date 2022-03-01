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





//exports.getall  = (req, res, next)=>{
    //const articleId = req.params.id
    
   //"SELECT * from commentaire  WHERE commentaire.articleid = ${articleId}"
    //db.query("SELECT * from commentaire join article on article.id = commentaire.articleid",
    //db.query("from commentaire WHERE articleid =?",[req.params.articleid,req.body.comment],
     //(err, result, fields)=>{
        
        //if (err) {
            //res.status(400).json(err);
        
        //} else{
            //res.status(200).json(result)
        //}
    //})
//}

exports.getone = ("/commentaire/:id", (req, res, next)=>{
    db.query("SELECT * from commentaire WHERE ID =?",[req.params.id], (err, result, field)=>{
        if(!err)
            {
                res.status(200).json(result);
            }
            else
            {
                (error => res.status(404).json({ error }));
            }
    })

})

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
    db.query("DELETE FROM commentaire WHERE ComID =?",
    [req.params.id], (err, rows, fields)=>{
        if (result[0].userId == req.body.userId || req.body.admin == true)
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

    exports.update = ('/update', (req,res, next)=>{
        db.query("UPDATE SET commentaire content = ?, WHERE id = ?",
        [content,  id],
        (err, rows, fields) =>{
            if (!err) {
                res.status.json("update successfully");
            } else {
                console.log(err)
            }
        })
    })


//exports.getall = (req, res, next)=> {
    //db.query("SELECT * from commentaire", (err, result, fields)=>{
        //if (err) {
            //res.status(400).json(err);
        
        //} else{
            //res.status(200).json(result)
        //}
       
    //})
//}




