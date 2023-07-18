const Products = require('../models/Products');

class productsController {

    async getAllProducts(req,res) {
        try {
            const products = await Products.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(err);
        }
    }

    async getProducts(req,res) {
        try {
            const products = await Products.findById(req.params.id);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(err);
        }
    }


    async addProducts(req,res) {
        try {

            //Create new product
            const newProduct = await new Products({
                image: req.body.image,
                bookName: req.body.bookName,
                bookPrice: req.body.bookPrice,
                bookCategory: req.body.bookCategory,
                top: false
                
            });

            const product = await newProduct.save();
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteBooks(req, res) {
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.status(200).json("xóa thành công");
        } catch (error) {
            res.statu(500).json(error);
        }
    }

    async updateBooks(req,res) {
        try {
            await Products.updateOne({ _id: req.params.id}, req.body);
            res.status(200).json("update thành công")
        } catch (error) {
            res.status(500).json(err);
        }
    }
       
}

module.exports = new productsController;