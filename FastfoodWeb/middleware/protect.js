const handleResult = require("../configs/errorHandle");
const config = require("../configs/configs");
const jwt = require('jsonwebtoken');
const accModel = require('../controllers/accountCtrl');

handleResult
module.exports = {
    protect: async (req, res, next) => {
        let token = '';
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            console.log(token);
        }
        else if (req.cookies.token){
            token = req.cookies.token;
        }
        if (!token) return handleResult.ShowResult(res, 200, false, "vui long dang nhap");

        try {
            const decode = jwt.verify(token, config.JWT_SECRET);
            req.user = await accModel.getItemById(decode.id);
            next();
        } catch (error) {
            return handleResult.ShowResult(res, 200, false, "vui long dang nhap");
        }
    },
    authorize: (...roles) => {
        return (req, res, next) => {
            console.log(roles);
            console.log(req.user.role);
            if(!roles.includes(req.user.role)){
                return handleResult.ShowResult(res, 200, false, "ban khong co quyen");
            }
            next();
        }
    }
}