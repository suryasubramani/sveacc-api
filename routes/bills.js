var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/login')
  .get()
  .post(function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, function(err, user) {
      if(err) {
        res.emit(err);
      }
      if(user == null) {
        res.json({"message": "user no found"})
      }
      res.json(user);
    })
  })

module.exports = router;
