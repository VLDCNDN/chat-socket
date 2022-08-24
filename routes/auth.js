var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

var AuthController = require('../controllers/auth.controller');

/* GET home page. */
router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
router.get('/verifyToken', auth, function(req, res) {
  res.sendStatus(200);
});

module.exports = router;
