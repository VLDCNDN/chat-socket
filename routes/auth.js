var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/auth.controller');

/* GET home page. */
router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);

module.exports = router;
