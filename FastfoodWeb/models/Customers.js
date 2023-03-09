const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomersSchema = new Schema({
    fullName: {type: String},
    age: {type: Number},
    local: {type: String},
    sDT: {type: String},
    sex: {type: Boolean},
    birth: {type: Date}
});

module.exports = mongoose.model('Customers', CustomersSchema);