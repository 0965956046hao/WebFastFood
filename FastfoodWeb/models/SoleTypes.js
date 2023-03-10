const mongoose = require('../config/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SoleTypesSchema = new Schema({
    soleName: {
        type: String,
        required: true,},
    surcharge: {
        type: Number,
        required: true,},
    describe: {
        type: String,
        required: true,},
    img: {
        type: String,
        required: true,},       
});

module.exports = mongoose.model('SoleTypes', SoleTypesSchema);
