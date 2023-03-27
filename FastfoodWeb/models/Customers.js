const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
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

CustomersSchema.virtual('account',{
  ref: config.item_collection,
  localField: '_id',
  foreignField: config.customers_collection
});
CustomersSchema.set('toObject',{virtuals:true});
CustomersSchema.set('toJSON',{virtuals:true});

module.exports = config.mongoose.model(config.customers_collection, CustomersSchema);