
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Carts = new Schema({
    image: {
        type: String,
        require: true,
    },
    bookName: {
        type: String,
        require: true,
    },
    bookPrice: {
        type: String,
        require: true,
    },
    bookQuality: {
        type: String,
        require: true
    }
},{
    timestamps: true,
 });

module.exports = mongoose.model('Carts', Carts)