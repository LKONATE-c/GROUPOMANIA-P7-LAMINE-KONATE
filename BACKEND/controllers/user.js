const db = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

// s'inscrire
exports.signup = (req, res, next) => {
  db.query(
    "SELECT *FROM user WHERE email = ?",
    [req.body.email],
    (err, result, field) => {
      if (result.length === 0) {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            let data = [
              req.body.firstname,
              req.body.lastname,
              req.body.email,
              hash,
              "customer",
            ];
            db.query(
              "INSERT INTO user (firstname, lastname, email, password, role) VALUES (?, ?, ?, ?, ?  )",
              data,
              (err, result, fields) => {
                if (!err) {
                  res.status(200).json("utilisateur créé");
                } else {
                  res.json(err);
                }
              }
            );
          })
          .catch((error) => {
            res.satuts(500).json(error);
          });
      } else {
        res.status(400).json("utilisateur existant");
      }
    }
  );
};          //LOG
exports.me = (req, res, next) => {
  if (req.auth) {
    db.query("INSERT INTO log (userid) VALUES (?)", [req.auth.id]);
    res.status(200).json(req.auth);
  } else {
    res.status(403).json("unithorized request");
  }
};

// se connecter
exports.login = (req, res, next) => {
  db.query(
    "SELECT * FROM user WHERE email=?",
    [req.body.email],
    (err, result, fields) => {
      let user = result[0];

      if (!user) return res.status(401).json({ error: "incorrect email" });
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "wrong password" });
          }
          db.query("INSERT INTO log (userid) VALUES (?)", [user.id]);
          res.status(200).json({
            userID: req.body.id,
            token: jwt.sign(
              { userId: user.id },
              "RANDOM_TOKEN_SECRET_78190_44600",
              { expiresIn: "24h" }
            ),
            user: user,
          });
        })
        .catch((error) =>
          res.status(500).json({ message: "authentication error" })
        );
    }
  );
};

//supprimer un compte
exports.delete = (req, res, next) => {
  db.query(
    "SELECT* FROM user WHERE id=?",
    [req.params.id],
    (err, result, field) => {
      if (err) {
        res.status(500).json(err);
      }
      db.query(
        "DELETE FROM user WHERE id=?",
        [req.params.id],
        (err, result, field) => {
          if (err) {
            res.status(500).json(err);
          }
          res.status(200).json({ message: "account deleted" });
        }
      );
    }
  );
};


//récuperer par son id
exports.getone = (req, res, next) => {
  db.query(
    "SELECT * FROM user WHERE id=? ",
    [req.params.id],
    function (err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result[0]);
      }
    }
  );
};


//modification du user
exports.modifAccount = (req, res, next) => {
  db.query(
    "UPDATE  user SET firstname = ?",
    [req.body.firstname],
    (err, result, fields) => {
      if (!err) {
        res.json("firstname updated");
      } else {
        res.json(err);
      }
    }
  );
  db.query(
    "UPDATE  user SET lastname = ?",
    [req.body.lastname],
    (err, result, fields) => {
      if (!err) {
        res.json("lastname updated");
      } else {
        res.json(err);
      }
    }
  );
};
//recuperer tous les users
exports.getall = (req, res, next) => {
  db.query("SELECT * from user", (err, result, fields) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};
