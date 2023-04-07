const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const pizzaBillsDetailsSchema = new Schema({
    BillId: { type: config.mongoose.Types.ObjectId, ref: config.bills_collection },
    pizzaId: { type: config.mongoose.Types.ObjectId, ref: config.pizzas_collection },
    pizzaName: String,
    pizzaImg: String,
    pizzaCost: Number,
    qualyti: Number,
    topping: {
              toppingid:  {type: config.mongoose.Types.ObjectId, ref: config.pizzatoppings_collection},
              toppingname: String,
              cost: Number
    },
    cakeBorder: {
              cakeborderId:  {type: config.mongoose.Types.ObjectId, ref: config.cakeborders_collection},
              cakebordername: String,
              cost: Number
    }
});

module.exports = config.mongoose.model('PizzaBillsDetails', pizzaBillsDetailsSchema);
