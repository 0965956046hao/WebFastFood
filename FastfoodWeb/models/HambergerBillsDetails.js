const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
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

module.exports = config.mongoose.model('HambergerBillsDetails', HambergerBillsDetailsSchema);
