const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AccountsSchema = new Schema({
    customId: {type: ObjectId},
    useName: {
        type: String,
        unique: true,
        required: true,},
    passWord: {
        type: String,
        required: true,},
    dateCreate: {
        type: Date,
        required: true,}
});

module.exports = mongoose.model('Accounts', AccountsSchema);
