const express = require("express");
const router = express.Router();
const db = require("../models/db.js");
const multer = require('../middlewares/multer-config');
const ctrlarticle = require('../controllers/article');




router.get("/all",ctrlarticle.getall());
router.get("/article/:id",ctrlarticle.getone());
router.post("/",ctrlarticle.add());
router.delete("/article/:id",ctrlarticle.delete());
router.put('/update',ctrlarticle.delete());



module.exports = router;