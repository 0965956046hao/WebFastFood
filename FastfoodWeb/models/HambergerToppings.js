const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HambergerToppingSchema = new Schema({
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
});

module.exports = mongoose.model('HambergerToppings', HambergerToppingSchema);
