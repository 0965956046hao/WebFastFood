const mongoose = require('../configs/configs');

const Schema = mongoose.Schema;
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
});

module.exports = mongoose.model('PizzaToppings', PizzaToppingSchema);
