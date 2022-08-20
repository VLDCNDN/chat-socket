var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/auth.controller');

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.post('/signup', AuthController.signup);


module.exports = router;
