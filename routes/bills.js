var express = require('express');
var router = express.Router();
var Bill = require('../models/bill');
var Product = require('../models/product');


/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
    Bill.find(function(err, bills) {
      if(err) {
        res.emit(err);
      }
      res.json(bills);
    });
  })
  .post(function(req, res, next) {
    for (let i = 0; i < req.body.items.length; i++) {
      const element = req.body.items[i];
      let q = -1*element.quantity;
      Product.findOneAndUpdate(element._id, { $inc: { quantity: q } }, function(err, post) {
        if(err) {
          res.emit(err);
        }
        Bill.create(req.body, function(err, post) {
          if(err) {
            res.emit(err);
          }
          res.json(post);
        })
      })
    }
  })


module.exports = router;
