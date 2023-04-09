const config = require('../configs/configs');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;
const saltRound = 10;

const AccountsSchema = new Schema({
    customId: { type: mongoose.Types.ObjectId, ref: config.customers_collection },
    email: {
        unique : true,
        type: String,
        required: true,},
    passWord: {
        type: String,
        required: true,},
    dateCreate: {
        type: Date,
        required: true,},
    role: String,
    modified:{
        
        modified_by_user_name	:	'string',
        modified_by_user_id	:	{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection },
    },
    created	:{
        // created_at	:	true,
        created_by_user_name	:	'string',
        created_by_user_id	:	{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection },
    },  
    status	:	'string',
    orderring	:	'string',
	resetPassToken: String,
	resetPassTokenExp: String
},{
    timestamps	:	true
  });

AccountsSchema.pre('save', function (next) {
    if(!this.isModified('passWord')){
		next();
	}else{
        const salt = bcrypt.genSaltSync(saltRound);
        this.passWord = bcrypt.hashSync(this.passWord,salt);
        next();
    }
})
AccountsSchema.methods.getSignedJWT=function(){
    return jwt.sign({id:this._id},config.JWT_SECRET,{expiresIn:config.JWT_EXPIRE});
}
AccountsSchema.methods.UpdateNew = async function (userNew) {
	let isMatch = await bcrypt.compare(userNew.passWord, this.passWord);
	if(!isMatch){
		const salt = bcrypt.genSaltSync(configs.saltRounds);
		userNew.passWord = bcrypt.hashSync(userNew.passWord, salt);
		return userNew;
	}
	userNew.passWord = this.passWord;
	return userNew;
}
AccountsSchema.methods.resetPassword = function () {
	const resetToken = crypto.randomBytes(20).toString('hex');
	this.resetPassToken = crypto.createHash('sha256').update(resetToken).digest('hex');
	this.resetPassTokenExp = Date.now()+10*60*1000;
	return resetToken;
}
AccountsSchema.statics.findByCredentinal = async function(email,passWord){
    if(!email||!passWord){
        return {error:"khong de trong email va password"};
    }
    let user = await this.findOne({email:email});
    if(!user){
        return {error:"email khong ton tai"};
    }
    let isMatch = await bcrypt.compare(passWord,user.passWord);
    if(!isMatch){
       
        return {error:"passwod sai"};
    } 
    return user;
}

module.exports = config.mongoose.model(config.accounts_collection, AccountsSchema);
