const express = require("express");
const router = express.Router();
const ctrlcommentaire = require('../controllers/commentaire');
const multer = require('../middlewares/multer-config');


router.get("/all/:id",ctrlcommentaire.getall);
//router.get("/commentaire/:id",ctrlcommentaire.getone);
router.post("/",ctrlcommentaire.add);
router.delete("/:id",ctrlcommentaire.delete);


 module.exports = router;


 