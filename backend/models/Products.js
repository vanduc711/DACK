
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
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
    bookCategory: {
        type: String,
        require: true,
    }
},{
    timestamps: true,
 });

module.exports = mongoose.model('Products', Products)