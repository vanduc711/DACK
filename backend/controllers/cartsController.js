const Carts = require('../models/Carts');
class cartsController {

    async addCartsProducts(req,res) {
        try {
            //Create new carts
            const newCarts = await new Carts({
                image: req.body.image,
                bookName: req.body.bookName,
                bookPrice: req.body.bookPrice,
                bookQuality: req.body.bookQuality
              });
        
              // Save Carts to DB
              const carts = await newCarts.save();
              res.status(200).json(carts);
        } catch (error) {
              res.status(500).json(carts);
        }
    }

    async GetCartsProducts(req,res) {
        try {
              const carts = await Carts.find();
              res.status(200).json(carts);
        } catch (error) {
              res.status(500).json(carts);
        }
    }

    async updateQuality(req,res) {
        try {
            await Carts.updateOne({ _id: req.params.id}, req.body);
            res.status(200).json("update thành công")
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteCarts(req,res) {
        try {
            await Carts.findByIdAndDelete(req.params.id);
            res.status(200).json("xóa thành công");
            
        } catch (error) {
            res.status(500).json(err);
        }
    }

}

module.exports = new cartsController;