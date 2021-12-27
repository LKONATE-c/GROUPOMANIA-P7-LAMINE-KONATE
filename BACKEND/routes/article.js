const express = require("express");
const Router = express.Router();
const db = require("../models/db.js");
const multer = require('../middlewares/multer-config');
const ctrlarticle = require('../controllers/article');




Router.get("/all",ctrlarticle.getall());
Router.get("/article/:id",ctrlarticle.getone());
Router.post("/",ctrlarticle.add());
Router.delete("/article/:id",ctrlarticle.delete());
Router.put('/update',ctrlarticle.delete());



module.exports = Router;