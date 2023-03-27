const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodStypesSchema = new Schema({
    typeName: {
        type: String,
        required: true,},
    describe: {
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


FoodStypesSchema.virtual('types',{
  ref: config.item_collection,
  localField: '_id',
  foreignField: config.foodtypes_collection
});
FoodStypesSchema.set('toObject',{virtuals:true});
FoodStypesSchema.set('toJSON',{virtuals:true});

module.exports = config.mongoose.model(config.foodtypes_collection, FoodStypesSchema);
