const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PizzaToppingSchema = new Schema({
    toppingName: {
        type: String,
        required: true,},
    cost: {
        type: Number,
        required: true,},
    describe: {
        type: String,
        required: true,},
    img: {
        type: String,
        required: true,},    
    modified:{
        modified_by_user_name	:	'string',
        modified_by_user_id	:	[{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection }],
    },
    created	:{
        created_by_user_name	:	'string',
        created_by_user_id	:	[{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection }],
    },
    status	:	'string',
    orderring	:	'string'
  },{
    timestamps	:	true
  });


module.exports = config.mongoose.model(config.pizzatoppings_collection, PizzaToppingSchema);
