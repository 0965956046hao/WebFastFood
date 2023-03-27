const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AccountsSchema = new Schema({
    customId: {type: ObjectId},
    useName: {
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

module.exports = config.mongoose.model(config.accounts_collection, AccountsSchema);
