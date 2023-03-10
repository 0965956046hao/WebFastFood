const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HambergerBillsDetailsSchema = new Schema({
    hambergerId: {
        type: ObjectId,
        required: true,
    },
    hambergerToppingId: {
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

module.exports = mongoose.model('HambergerBillsDetails', HambergerBillsDetailsSchema);
