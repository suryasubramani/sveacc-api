var express = require('express');
var router = express.Router();
var Product = require('../models/product');


/* GET users listing. */
router.get('/', function(req, res, next) {
  Product.find(function(err, products) {
    if(err) {
        res.emit(err);
    }
    res.json(products);
  });
});

router.route('/')
  .post(function(req, res, next) {
    Product.create(req.body, function(err, post) {
        if(err) {
            res.emit(err);
        }
        res.json(post);
    });
  })

router.route('/:id')
  .get(function(req, res, next) {
    Product.findById(req.params.id, function(err, product) {
      if(err) {
        res.emit(err);
      }
      res.json(product);
    })
  })

module.exports = router;
