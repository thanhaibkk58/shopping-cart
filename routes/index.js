var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.find(function (err, docs) {
      var products = [];
      products = docs;
      res.render("index", { title: "shopping-cart", products: products });
  });
});

module.exports = router;
