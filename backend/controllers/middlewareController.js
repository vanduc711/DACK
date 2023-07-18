
const jwt = require('jsonwebtoken');

class middlewareControler {

    // xác nhận token
    veryfyToken(req,res,next){
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            //chứng nhận token
            jwt.verify(accessToken, "thucthanthien", (err,staff) => {
                if(err){
                    res.status(403).json('token hết hạn')
                }
                req.staff = staff;
                next();
            })
        }else{
            res.status(401).json('chưa đc xác thực')
        }
    }

    verifyTokenAdmin(req, res, next){
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            //chứng nhận token
            jwt.verify(accessToken, "thucthanthien", (err,staff) => {
                if(err){
                    res.status(403).json('token hết hạn')
                }
                req.staff = staff;
                if(req.staff.admin){
                    next();
                }
            })
        }else{
            res.status(401).json('chưa đc xác thực')
        }
    }
}

module.exports = new middlewareControler