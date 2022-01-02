const express = require("express");
const router = express.Router();
const likesctrl = require('../controllers/likes');


router.post("/like",likesctrl.like);
router.post("/liked",likesctrl.liked)


module.exports = router;