var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* POST   */
router.post('/register', function(req, res, next) {
  console.log("MADE IT TO ROUTE")
  // req.body === { username: _____ , password: _________ }

  User.register(req.body, function(err, user){
    res.status(err ? 400 : 200).send(err || user);
  });
});


router.post('/login', function(req, res, next) {
  // req.body === { username: _____ , password: _________ }
  User.login(req.body, function(err, token){
    console.log("Router TOKEN", token);
    res.status(err ? 400 : 200).send(err || token);
  });
});




module.exports = router;