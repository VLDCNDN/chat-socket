var express = require("express");
var router = express.Router();
var UsersController = require("../controllers/users.controller");

/* GET users listing. */
router.get("/", UsersController.getUser);

module.exports = router;

