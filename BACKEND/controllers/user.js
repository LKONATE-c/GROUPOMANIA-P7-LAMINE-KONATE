const db = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");


// s'inscrire 
exports.signup = (req, res, next)=> {
    db.query("SELECT * FROM user WHERE email=?",[req.body.email],
    (err,rows,fields) =>{
        
        let user = result[0];
        if (!user) {
            bcrypt.hash(req.body.password,10)
            .then (hash => {
                const image = `${req.protocol}://${req.get('host')}/images/profile/pp.png`;
                const user = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hash,
                    imageUrl: image,
                }
                let data = [ req.body.firstname, req.body.lastname, req.body.email. req.body.password, req.body.image];
                db.query("INSERT INTO user ( firstname, lastname, email, password, image) VALUES (?, ?, ?, ?, ?  )",
                 function (err, result) {
                    if (err)
                        throw err;
                    res.status(201).json({ message: 'user created' });
                })
                })
                .catch(error => res.status (500).json({ error }));
            } else {
                res.status(401).json ({ message:'email already exists'})
            }
        

    })
};
// se connecter 
exports.login = (req, res, next) => {
    db.query("SELECT * FROM user WHERE email=?",[req.body.email],
    (err,result,fields)  =>{
        let user = result[0];
      
        if (!user) return res.statuts(401).json({ error:'incorrect email'});
        bcrypt.compare(req.body.password,user.password)
        .then(valid => {
            if (valid) {
                return res.status(401).json({error: 'wrong password' })
            }
            res.status(200).json({
                userID:req.body.id,
                token:jwt.sign(
                    {userID:req.body.id},
                    'RANDOM_TOKEN_SECRET_78190_44600',
                    { expiresIn: '24h' },

                )
            })
            db.query("INSERT INTO connection (userid) VALUES (?)",[user.id])
        })
        .catch(error => res.status(500).json({message:'authentication error'}))
})
}

//supprimer un compte 
exports.delete = (req, res, next) => {
    if (req.body.password) {
        db.query("SELECT* FROM user WHERE id=?",[req.body.id],
       function (err, result) {
           let user = result[0];
           bcrypt.compare(req.body.password, user.password)
           .then(valid => {
               if (!valid) {
                   return res.status(401).json({ message:"wrong password"});
               }else {
                   bcrypt.hash(req.body.password, 10)
                   .then(hash => {
                       db.query("DELETE FROM user WHERE id=?",[req.params.id],
                       function (err,result){
                           if (err) throw err;
                           res.status(200).json({ message:'account ${req.params.id} deleted'});
                       });
                   })
                   .catch(error => res.status(500).json({ error}));
               }
           })
           .catch(error => res.status(500).json ({ message:'authentication error'}));
       });
    }
}
//recupérer tous par nom ou prénom
exports.getall = (req, res, next) => {
    db.query("SELECT * FROM user where firstname LIKE '%${req.body.firstname}%' OR lastname LIKE '%${req.body.lastname}%'",
    [req.body.firstname, req.body.lastname],
    function (err, result){
        if (err) res.statuts(400).json({ err });
        res.status(200);json(result)
    })
}

//récuperer par son id 
exports.getone = (req,res, next) => {
    db.query("SELECT * FROM user WHERE id=? ",[req.params.id],
    function (err, result) {
        if (err) {
            res.status(400).json(err);
        }else{
            res.status(200).json(result)
        }
      
    })
}

//modifier le mots de passe 
exports.modifyPassword = (req, res, next) => {
    if(req.body.password) {
        db.query("SELECT * FROM user WHERE id=?",[req.params.id],
        function(err, result){
            let user = result[0];
            bcrypt.compare(req.body.oldPassword,user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error:'wrong password'});
                } else {
                    bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        let sql2 = "UPDATE user SET password=? WHERE id=?";
                       
                        db.query(sql2, [hash, req.params.id],
                            function (err,result) {
                                if (err) throw err;
                                res.status(200).json({message:'password modify'})
                            });
                    })
                    .catch(error => res.status(500).json({ error}));
                }
            })
            .catch(error => res.status(400).json({message:'authentication error'}));
        })
    }
}
//modification du user
exports.modifAccount = (req, res, next) => {
      
    if (req.body.firstname != "") {
        let sql2 = 'UPDATE user SET firstname=? WHERE id=?';
        db.query(sql2, [req.body.firstname, req.params.id],
            function (err,result){
                if (err) throw err;
            });
    }
    
    if (req.body.lastname != "") {
        let sql2 = 'UPDATE user SET lastname=? WHERE id=?';
        db.query(sql2,[req.body.lastname, req.params.id],
            function (err, result){
                if (err) throw err;
            });
        }
        res.status(200).json({ message:'user update'})
    }