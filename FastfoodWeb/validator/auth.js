const { check ,body, validationResult } = require('express-validator');
var handleResult = require('../configs/errorHandle');
var msg = require('../configs/notifies');
var util = require('util');

var roles = ['admin','user','publisher'];
var optionStrongPassword = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
}

const ValidationRule = () => {
    console.log(a)
    return [
        body('email').isEmail().withMessage(msg.MSG_EMAIL),
        check('password').isStrongPassword(optionStrongPassword).withMessage(util.format(msg.MSG_PASSWORD,optionStrongPassword.minLength,optionStrongPassword.minLowercase,optionStrongPassword.minNumbers)),
        body('role').isIn(roles).withMessage(msg.MSG_ROLE),
        //check('password').equals('repassword').withMessage(msg.MSG_PASSCHECK),
    ]
}

const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
       return next();
    }
    const errorsPlus = [];
    return handleResult.returnResult(res,400,false,errors.array());
}

module.exports = {
    ValidationRule,Validate
}