const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AccountsSchema = new Schema({
    customId: {type: ObjectId},
    useName: {type: String},
    passWord: {type: String},
    dateCreate: {type: Date}
});

module.exports = mongoose.model('Accounts', AccountsSchema);
