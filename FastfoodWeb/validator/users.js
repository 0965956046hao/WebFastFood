const { body, validationResult } = require('express-validator');
var handleResult = require('../configs/errorHandle');
var msg = require('../configs/notifies');
var util = require('util');

var optionStrongPassword = {
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
}

const ValidationRule = () => {
    return [
        body('email').isEmail().withMessage(msg.MSG_EMAIL),
        body('password').isStrongPassword(optionStrongPassword).withMessage(util.format(msg.MSG_PASSWORD,
            optionStrongPassword.minLength,optionStrongPassword.minLowercase,optionStrongPassword.minNumbers)),
        body('role').isIn(roles).withMessage(msg.MSG_ROLE)
    ]
}

const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
       return next();
    }
    const errorsPlus = [];
    return handleResult.ShowResult(res,400,false,errors.array());
}

module.exports = {
    ValidationRule,Validate
}