const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillsSchema = new Schema({
    customId: {
        type: ObjectId,
        required: true,},
    payMentId: {
        type: Number,
        required: true,},
    status: {
        type: Number,
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

module.exports = config.mongoose.model('Bills', BillsSchema);
