const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Type = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Type', Type);