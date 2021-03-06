const express = require("express");
const router = express.Router();
const db = require("../models/db.js");
const ctrluser = require('../controllers/user');
const multer = require ("../middlewares/multer-config");
const auth = require("../middlewares/auth");


router.get("/all",auth,ctrluser.getall);
router.get("/getone/:id",auth,ctrluser.getone);
router.post("/signup", ctrluser.signup);
router.post("/login",ctrluser.login);
router.delete("/:id",auth,ctrluser.delete);


router.get("/me",auth,ctrluser.me)


module.exports = router;



