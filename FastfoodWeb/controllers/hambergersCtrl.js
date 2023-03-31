var itemSchma = require('../models/Hambergers');

module.exports = {

    schema: itemSchma,
    listItem: async() => {
        var list = await itemSchma.find({}).exec();
        return list;
    },
    GetItemById: async(id) => {
        var list = await itemSchma.find({ _id: id }).exec();
        return list;
    },
    AddAnItem: async(params) => {
        var newItem = await itemSchma(params);
        await newItem.save();
        console.log("Add Hambergers success!");
        return newItem;
    },
    UpdateAnItem: async(params) => { //param {id:'id',update:{name:'Lap Trinh Win'}}
        var UpdateItem = await itemSchma.findByIdAndUpdate(params.id, params.update);
        return UpdateItem;
    },
    DeleteAnItem: async(param) => {
        var deleteItem = await itemSchma.findByIdAndDelete(param);
        return deleteItem;
    }
}