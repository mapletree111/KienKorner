var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Kien Tran - Projects'});
});

module.exports = router;
