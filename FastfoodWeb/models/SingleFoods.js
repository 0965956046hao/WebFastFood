const config = require('../configs/configs');
var mongoose = require('mongoose');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SingleFoodsSchema = new Schema({
    foodTypeId: { type: mongoose.Types.ObjectId, ref: config.foodtypes_collection },
    foodName: {
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
        modified_by_user_id	:	{ type: mongoose.Types.ObjectId, ref: config.accounts_collection },
    },
    created	:{
        created_by_user_name	:	'string',
        created_by_user_id	:	{ type: mongoose.Types.ObjectId, ref: config.accounts_collection },
    },
    status	:	'string',
    orderring	:	'string'
  },{
    timestamps	:	true
  });

module.exports = config.mongoose.model(config.singlefoods_collection, SingleFoodsSchema);
