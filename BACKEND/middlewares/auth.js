const jwt = require("jsonwebtoken");
const db = require("../models/db");


module.exports = (req,res,next) => {
       
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET_78190_44600');
        const userId = decodedToken.userId;
        console.log(decodedToken);
        console.log(userId);
     db.query(`SELECT * FROM user WHERE id = ${userId}`,[],(err,result,filed)=>{
       console.log(err);
       console.log(result);
       if(!err){
         req.auth=result[0];
         next();
         return;
       }

     })
    
  } catch {
   
    res.status(403).json({
      error: new Error('unauthorized request.')
    });
  }
}
    
