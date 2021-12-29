const express = require('express');
const helmet = require ('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

//import des routes
const ArticleRoutes = require("./routes/article");
const UserRoutes = require("./routes/user");

const CommentaireRoutes = require("./routes/commentaire");
const LikesRoutes = require("./routes/likes");
const authRoutes = require('./routes/auth');


 // Appel express
 const app = express();
 
 //methode securité helmet
 app.use(helmet());

 //CONFIG DU CORS
app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
 next();
});

app.use(express.json());

//enregistrement des routeurs
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/api/article", ArticleRoutes);

app.use("/api/user", UserRoutes);
app.use("/api/commentaire",CommentaireRoutes);
app.use("/api/likes",LikesRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;