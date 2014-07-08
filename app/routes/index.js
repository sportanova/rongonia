var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/rongonia', function(req, res) {
  res.render('rongonia');
});

module.exports = router;
