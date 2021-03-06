const bcrypt = require('bcrypt');
const db  = require ('../models/db');
const  User = db.user;
const jwt = require ('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const image = `${req.protocol}://${req.get('host')}/images/profile/pp.png`;
        const user = new User({
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ message:"error" }));

};

exports.login = (req, res, next) => {
    db.query("SELECT * from user WHERE email = ? AND password = ? ")
    .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET_78190_44600',
                { expiresIn: '24h' }
              )   
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

