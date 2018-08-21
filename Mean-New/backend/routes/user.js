const express = require("express");

const Post = require("../models/post");

const router = express.Router();

const UserController = require('../controllers/user');

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;
