const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CustomersSchema = new Schema({
    fullName: {
        type: String,
        required: true,},
    age: {
        type: Number,
        required: true,},
    local: {
        type: String,
        required: true,},
    sDT: {
        type: String,
        unique: true,
        required: true,},
    sex: {
        type: Boolean,
        required: true,},
    birth: {
        type: Date,
        required: true,}
});

module.exports = mongoose.model('Customers', CustomersSchema);