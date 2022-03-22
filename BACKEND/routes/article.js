const express = require("express");
const router = express.Router();
const multer = require('../middlewares/multer-config');
const ctrlarticle = require('../controllers/article');
const auth = require("../middlewares/auth");




router.get("/all",auth,ctrlarticle.getall);
router.get("/getone/:id",auth,ctrlarticle.getone);
router.post("/",auth,multer,ctrlarticle.add);
router.delete("/:id",auth,ctrlarticle.delete);
router.put('/update',auth,ctrlarticle.update);
router.get('/all/:userid',auth,ctrlarticle.getArticleByUser);




module.exports = router;