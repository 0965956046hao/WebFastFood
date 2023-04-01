const config = require('../configs/configs');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;
const saltRound = 10;

const AccountsSchema = new Schema({
    customId: { type: mongoose.Types.ObjectId, ref: config.customers_collection },
    email: {
        type: String,
        unique: true,
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
        modified_by_user_id	:	'string',
    },
    created	:{
        // created_at	:	true,
        created_by_user_name	:	'string',
        created_by_user_id	:	'string',
    },  
    status	:	'string',
    orderring	:	'string'    
},{
    timestamps	:	true
  });

AccountsSchema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync(saltRound);
    this.passWord = bcrypt.hashSync(this.passWord,salt);
    next();
})
AccountsSchema.methods.getSignedJWT=function(){
    return jwt.sign({id:this._id},config.JWT_SECRET,{expiresIn:config.JWT_EXPIRE});
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
