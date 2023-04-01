const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cakeBordersSchema = new Schema({
    cakeBorderName: {
        type: String,
        required: true,},
    surcharge: {
        type: Number,
        required: true,},
    describe: {
        type: String,
        required: true,},
    modified:{
        modified_by_user_name	:	'string',
        modified_by_user_id	:	{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection },
    },
    created	:{
        created_by_user_name	:	'string',
        created_by_user_id	:	{ type: config.mongoose.Types.ObjectId, ref: config.accounts_collection },
    },
    status	:	'string',
    orderring	:	'string'
  },{
    timestamps	:	true
  });


module.exports = config.mongoose.model(config.cakeborders_collection, cakeBordersSchema);
