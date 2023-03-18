const mongoose = require('../configs/configs');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cakeBordersSchema = new Schema({
    cakeBorderName: {
        type: String,
        required: true,},
    surcharge: {
        type: Number,
        required: true,},
    describe: {
        type: String,
        required: true,}
});

module.exports = mongoose.model('CakeBorders', cakeBordersSchema);
