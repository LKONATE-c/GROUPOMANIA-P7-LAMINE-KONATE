const express = require("express");
const router = express.Router();
const ctrlcommentaire = require('../controllers/commentaire');


router.get("/all",ctrlcommentaire.getall);
router.get("/commentaire/:id",ctrlcommentaire.getone);
router.post("/",ctrlcommentaire.add);
router.delete("/commentaire/:id",ctrlcommentaire.delete);
router.put('/update',ctrlcommentaire.delete);

 module.exports = router;