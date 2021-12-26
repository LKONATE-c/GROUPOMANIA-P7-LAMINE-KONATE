const express = require('express');
const helmet = require ('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');

//import des routes 
const UserRoutes = require("./routes/user");
const ArticleRoutes = require("./routes/article");


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

app.use("/user", UserRoutes);
app.use("/article", ArticleRoutes);
module.exports = app;