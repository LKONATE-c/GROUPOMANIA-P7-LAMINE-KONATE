const express = require("express");
const router = express.Router();
const db = require("../models/db.js");
const usectrl = require('../controllers/auth');

router.post ('/signup', usectrl.signup);
router.post ('/login', usectrl.login);



module.exports = router;