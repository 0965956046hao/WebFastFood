const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
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

module.exports = config.mongoose.model('SingleFoodBillsDetails', SingleFoodBillsDetailsSchema);
