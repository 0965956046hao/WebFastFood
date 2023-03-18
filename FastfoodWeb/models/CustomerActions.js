const mongoose = require('../configs/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomerActionsSchema = new Schema({
    actionName: {
        type: String,
        required: true,},
    describe: {
        type: String,
        required: true,},
});

module.exports = mongoose.model('CustomersActions', CustomerActionsSchema);
