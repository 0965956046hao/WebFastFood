
const Accounts = require('../controllers/accountCtrl');
const Customers = require('../controllers/customerCtrl');
const Auditing = require('../controllers/customerAuditingCtrl');
const mongoose = require('mongoose');
const crypto = require('crypto');
var sendmail = require('../middleware/sendMail');
const config = require('../configs/configs');

module.exports ={
    Register: async (item)=>{
        const id = new mongoose.Types.ObjectId();
        var paramsCus = {
                            "_id": id,
                            "fullName"	:	item.name,
                            "local"	:	item.address,
                            "sDT"	:	item.phone,
                            "modified":{
                                "modified_by_user_name"	:	item.name,
                                "modified_by_user_id"	:	id
                            },
                            "created"	:{
                                "created_by_user_name"	:	item.name,
                                "created_by_user_id"	:	id
                            },
                            "status"	:	"1",
                            "orderring"	:	"1"
                        };
        
        var paramsAcc = {
                            "customId"	:	id,
                            "email"	:	item.email,
                            "passWord"	:	item.password,
                            "dateCreate"	:	new Date().toISOString(),
                            "rode": "user",
                            "modified":{
                                "modified_by_user_name"	:	item.name,
                                "modified_by_user_id"	:	id
                            },
                            "created"	:{
                                "created_by_user_name"	:	item.name,
                                "created_by_user_id"	:	id
                            },
                            "status"	:	"1",
                            "orderring"	:	"1"
                        }; 
        
        var aud = { "customId": id,
                    "actionId": 'Đăng ký',
                    "dateCreate": new Date()}

        console.log(paramsAcc)
                        
        let user = await Accounts.schema.findOne({email:item.email});
        console.log(user);
        if(user != null){
        throw new Error('Email đã tồn tại');
        }
        else{
            let newCus = await new Customers.schema(paramsCus).save();
            let newAcc = await new Accounts.schema(paramsAcc).save();
            let newAdt = await new Auditing.schema(aud).save();
            return await newAcc.getSignedJWT();
        }
    },
    Login:async (item)=>{
        const {email,password} = item;
        console.log(email)
        console.log(password)
        const result = await Accounts.schema.findByCredentinal(email,password);
        if(result.error){
            return result;
        }
        else
        return result.getSignedJWT();
    },
    Resetpassword: async (item) => {
        const resetPassToken = crypto.createHash('sha256').update(item.resetToken).digest('hex');
        const user = await Accounts.schema.findOne({
            resetPassToken: resetPassToken ,
            resetPassTokenExp: { $gt: Date.now() 
        }});
        if(!user) return false;
        user.passWord = item.password;
        user.resetPassToken = undefined;
        user.resetPassTokenExp = undefined;
        await user.save();
        return true;
    },
    ForgotPassword: async (item) => {
        const user = await Accounts.schema.findOne({ email: item.email }).exec();

        if (!user) return false;
        const resetToken = user.resetPassword();
        console.log(user);
        await user.save();
        
        const resetURL = `${config.HOST}auth/resetpassword/${resetToken}`;
        const message = `Truy cap vao link de doi passs: ${resetURL}`;
        console.log(resetURL)
        
        try {
            await sendmail.SendMail({
                email: user.email,
                subject: " Doi Pass",
                message: message
            })
            return "check mail";
        } catch (error) {
            user.resetPassToken = undefined;
            user.resetPassTokenExp = undefined;
            await user.save();
            return "khong gui duoc mail";
        }
    }  
}
