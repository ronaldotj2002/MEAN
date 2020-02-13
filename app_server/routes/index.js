 var express = require('express');
var router = express.Router();

/* GET home page. */
var homepageController = function(req, res){
  res.render('index', {title: 'Express'});
};

router.get('/', homepageController);

module.exports = router;
