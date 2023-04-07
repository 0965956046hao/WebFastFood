var itemSchma = require('../models/Bills');

module.exports = {

    schema: itemSchma,
    listItem: async() => {
        var list = await itemSchma.find({}).populate({ path: 'details', select: 'pizzaName pizzaCost qualyti topping cakeBorder' }).exec();
        return list;
    },
    GetItemByCusId: async(id) => {
        var list = await itemSchma.find({ customId: id }).populate({ path: 'details', select: 'pizzaName pizzaCost qualyti topping cakeBorder' }).exec();
        return list;
    },
    AddAnItem: async(params) => {
        var newItem = await itemSchma(params);
        await newItem.save();
        console.log("Add Bills success!");
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