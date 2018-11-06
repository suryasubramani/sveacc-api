var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

    productName: String,
    productBrand: String,
    category: String,
    quantity: Number,
    price: Number,
    provider: String

});

var Product = mongoose.model('Product',productSchema);
module.exports = Product;