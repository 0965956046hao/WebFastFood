const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomerActionsSchema = new Schema({
    actionName: {
        type: String,
        required: true,},
    describe: {
        type: String,
        required: true,},
});

module.exports = config.mongoose.model('CustomersActions', CustomerActionsSchema);
