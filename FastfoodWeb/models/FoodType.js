const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodStypesSchema = new Schema({
    typeName: {
        type: String,
        required: true,},
    describe: {
        type: String,
        required: true,},
});

module.exports = mongoose.model('FoodStypes', FoodStypesSchema);
