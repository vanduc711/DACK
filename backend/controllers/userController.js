const { findByIdAndDelete } = require('../models/Staffs');
const Staffs = require('../models/Staffs');

class userController {

    async getAllUser(req, res){
        try {
            const User = await Staffs.find();
            res.status(200).json(User);
            
        } catch (error) {
            res.status(500).json(err);
        }
    }

    async deleteUser(req, res) {
        try {
            const User = await Staffs.findByIdAndDelete(req.params.id);
            res.status(200).json("xóa thành công");
            
        } catch (error) {
            res.status(500).json(err);
        }
    }

    async updateUser(req,res) {
        try {
            const User = await Staffs.updateOne({ _id: req.params.id}, req.body);
            res.status(200).json("update thành công")
        } catch (error) {
            res.status(500).json(err);
        }
    }
}

module.exports = new userController;