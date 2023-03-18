const mongoose = require('../configs/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomersAuditingSchema = new Schema({
    customId: {
        type: ObjectId,
        required: true,},
    actionId: {
        type: ObjectId,
        required: true,},
    dateCreate: {
        type: Date,
        required: true,}
});

module.exports = mongoose.model('CustomersAuditing', CustomersAuditingSchema);
