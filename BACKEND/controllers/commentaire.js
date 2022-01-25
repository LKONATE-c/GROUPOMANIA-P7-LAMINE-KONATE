const db = require("../models/db");

exports.getall  = (req, res, next)=>{
    const articleId = req.params.id
   
    db.query("SELECT * from commentaire  WHERE commentaire.article_id = ${articleId}",
     (err, rows, fields)=>{
        
        if (err) {
            res.status(400).json(err);
        
        } else{
            res.status(200).json(result)
        }
    })
}

exports.getone = ("/commentaire/:id", (req, res, next)=>{
    db.query("SELECT * from commentaire WHERE ID =?",[req.params.id], (err, res, field)=>{
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

exports.add = ("/", (req, res, next) =>{
    let data = [ req.body.content, req.body.userid, req.body.articleid,];
    db.query("INSERT INTO commentaire ( content, userid, articleid) VALUES (?, ?, ?)",
    data, (err,res,field) =>{
        if(!err){
            res.status(200).json({ message:"content add"});
        }else {
            res.status(400).json(err);
        }
    })
})




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




