const express = require("express");
const router = express.Router();
const ctrlcommentaire = require('../controllers/commentaire');
const multer = require('../middlewares/multer-config');
const auth = require("../middlewares/auth");


router.get("/all/:id",auth,ctrlcommentaire.getall);
//router.get("/commentaire/:id",ctrlcommentaire.getone);
router.post("/",auth,ctrlcommentaire.add);
router.delete("/:id",auth,ctrlcommentaire.delete);


 module.exports = router;


 