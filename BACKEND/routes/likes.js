const express = require("express");
const router = express.Router();
const ctrllikes = require('../controllers/likes');


router.get("/all",ctrllikes.getall);
router.get("/likes/:id",ctrllikes.getone);
router.post("/",ctrllikes.add);
router.delete("/like/:id",ctrllikes.delete);
router.put('/update',ctrllikes.update);



module.exports = router;