const express = require("express");
const router = express.Router();
const multer = require('../middlewares/multer-config');
const ctrlarticle = require('../controllers/article');
const auth = require("../middlewares/auth");




router.get("/all",auth,ctrlarticle.getall);
router.get("/getone/:id",ctrlarticle.getone);
router.post("/",ctrlarticle.add);
router.delete("/:id",ctrlarticle.delete);
router.put('/update',ctrlarticle.update);
router.get('/all/:userid',ctrlarticle.getArticleByUser);




module.exports = router;