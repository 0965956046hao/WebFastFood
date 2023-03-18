const mongoose = require('../configs/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomersSchema = new Schema({
    fullName: {
        type: String,
        required: true,},
    age: {
        type: Number,
        required: true,},
    local: {
        type: String,
        required: true,},
    sDT: {
        type: String,
        unique: true,
        required: true,},
    sex: {
        type: Boolean,
        required: true,},
    birth: {
        type: Date,
        required: true,},
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

module.exports = mongoose.model('Customers', CustomersSchema);