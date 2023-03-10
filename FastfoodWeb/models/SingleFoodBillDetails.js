const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SingleFoodBillsDetailsSchema = new Schema({
    singleFoodId: {
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

module.exports = mongoose.model('SingleFoodBillsDetails', SingleFoodBillsDetailsSchema);
