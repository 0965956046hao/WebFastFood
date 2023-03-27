const config = require('../configs/configs');

const Schema = config.mongoose.Schema;
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

module.exports = config.mongoose.model('SoleTypes', SoleTypesSchema);
