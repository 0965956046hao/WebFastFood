const config = require('../configs/configs');
var mongoose = require('mongoose');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;
const saltRound = 10;

const CartsSchema = new Schema({
    customId: { type: mongoose.Types.ObjectId, ref: config.customers_collection },
    pizzaId: { type: mongoose.Types.ObjectId, ref: config.pizzas_collection },
    pizzaName: String,
    toppingName: String,
    cakeborderName: String,
    pizzaImg: String,
    pizzaCost: Number,
    toppingId: { type: mongoose.Types.ObjectId, ref: config.pizzatoppings_collection },
    cakeBorderId: { type: mongoose.Types.ObjectId, ref: config.cakeborders_collection },
    quality: Number,
    amount: Number
},{
    timestamps	:	true
  });

module.exports = config.mongoose.model(config.carts_collection, CartsSchema);
