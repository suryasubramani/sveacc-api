var mongoose = require('mongoose');

var billSchema = new mongoose.Schema({

    date: Date,
    customerName: String,
    phoneNumber: String,
    items: [Object],
    sgst: Number,
    cgst: Number,
    totalAmount: Number,
    roundOff: Number

});

var Bill = mongoose.model('Bill',billSchema);
module.exports = Bill;