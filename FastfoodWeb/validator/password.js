const { body, validationResult } = require('express-validator');
var MSG = require('../configs/notifies');
var handleresult = require('../configs/errorHandle');
var util = require('util');

const option = {
    StrongPassword:{
        minLength:8,
        minUppercase:0,
        minLowercase:1,
        minNumbers:1,
        minSymbols:0
    }
}

const PassRules = () => {
    return [
        body('password').isStrongPassword(option.StrongPassword).withMessage(util.format(MSG.MSG_PASSWORD,option.StrongPassword.minLength,option.StrongPassword.minUppercase,option.StrongPassword.minLowercase,option.StrongPassword.minNumbers,option.StrongPassword.minSymbols))
    ]
}
const PassValidate = (req, res, next)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return  handleresult.returnResult(res, 400, false, { errors: errors.array() });
}

module.exports={
    PassRules,PassValidate
}