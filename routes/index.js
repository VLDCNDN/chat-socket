var express = require('express');
const auth = require('../middleware/auth');

var router = express.Router();

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  console.log(req.user);
  res.send({ title: 'Express' });
});

module.exports = router;
