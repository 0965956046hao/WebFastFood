const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const pizzaBillsDetailsSchema = new Schema({
    pizzaId: {
        type: ObjectId,
        required: true,
    },
    pizzaToppingId: {
        type: ObjectId,
        required: true,
    },
    soleTypeId: {
        type: ObjectId,
        required: true,
    },
    cakeBorderId: {
        type: ObjectId,
        required: true,
    },
    billId: {
        type: ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,},
    unitPrice: {
        type: Number,
        required: true,},
});

module.exports = mongoose.model('PizzaBillsDetails', pizzaBillsDetailsSchema);
