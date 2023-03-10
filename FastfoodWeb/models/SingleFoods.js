const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SingleFoodsSchema = new Schema({
    foodTypeId: {
        type: ObjectId,
        required: true,
    },
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
});

module.exports = mongoose.model('SingleFoods', SingleFoodsSchema);
