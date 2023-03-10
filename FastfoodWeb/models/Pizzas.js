const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PizzasSchema = new Schema({
    pizzaName: {
        type: String,
        required: true,},
    cost: {
        type: Number,
        required: true,},
    describe: {
        type: String,
        required: true,},
    size: {
        type: Number,
        required: true,},
    cakeFilling: {
        type: Number,
        required: true,},
    img: {
        type: String,
        required: true,},   
});

module.exports = mongoose.model('Pizzas', PizzasSchema);
