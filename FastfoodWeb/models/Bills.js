const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillsSchema = new Schema({
    customId: {
        type: ObjectId,
        required: true,},
    payMentId: {
        type: ObjectId,
        required: true,},
    status: {
        type: String,
        required: true,},
    describe: {
        type: String,
        required: true,},
    dateCreate: {
        type: Date,
        required: true,},
    sumCost: {
        type: Number,
        required: true,}
});

module.exports = mongoose.model('Bills', BillsSchema);
