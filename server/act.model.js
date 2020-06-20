const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Act = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Act', Act);