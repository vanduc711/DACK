const Staffs = require('../models/Staffs');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {

    async registerUser(req,res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
      
            //Create new user
            const newStaffs = await new Staffs({
              username: req.body.username,
              email: req.body.email,
              password: hashed,
            });
      
            // Save user to DB
            const user = await newStaffs.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    
    async loginUser(req,res) {
        try {
            const staff = await Staffs.findOne({email: req.body.email})
            if(!staff){
                res.status(404).json("ko tìm thấy email");
            }

            //so sánh password nhập vs database
            const validatePassword = await bcrypt.compare(
                req.body.password,
                staff.password,
            )
            if(!validatePassword){
                res.status(404).json("ko đúng mật khẩu");
            }

            if(staff && validatePassword){
                // tạo token
                const token = jwt.sign({
                    id: staff.id,
                    admin: staff.admin,
                    
                },
                "thucthanthien",
                {expiresIn: "2d"}
                )
                res.status(200).json({staff, token});
            }


        } catch (error) {
            res.status(500).json(err);
        }
    }


}

module.exports = new authController;