
const Accounts = require('../controllers/accountCtrl');
const Customers = require('../controllers/customerCtrl');
const AccountsSchema = require('../models/Accounts');
const mongoose = require('mongoose');

module.exports ={
    Register: async (item)=>{
        const id = new mongoose.Types.ObjectId();
        var paramsCus = {
                            "_id": id,
                            "fullName"	:	item.name,
                            "local"	:	item.address,
                            "sDT"	:	item.phone,
                            "birth"	:	item.birth + "T13:33:03.969Z",
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
                            "customId"	:	paramsCus._id,
                            "email"	:	req.body.email,
                            "passWord"	:	req.body.pass,
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
        let user = await Accounts.findOne({email:item.email});
        if(user){
        throw new Error('Email đã tồn tại');
        }
        else{
            let newCus = await new Customers(paramsCus).save();
            let newAcc = await new Accounts(paramsAcc).save();
            
            return await newItem.getSignedJWT();
        }
        
    },
    Login:async (item)=>{
        const {email,password} = item;
        const result = await AccountsSchema.findByCredentinal(email,password);
        if(result.error){
            return result;
        }
        return result.getSignedJWT();
    }  
}
