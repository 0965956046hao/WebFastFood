var itemSchma = require('../models/Customers');
var itemSchma1 = require('../models/Pizzas');
var itemSchma2 = require('../models/Hambergers');
var itemSchma3 = require('../models/SingleFoods');
var itemSchma4 = require('../models/FoodType');
var itemSchma5 = require('../models/HambergerToppings');
var itemSchma6 = require('../models/PizzaToppings');
var itemSchma7 = require('../models/CakeBorder');

module.exports = {

    schema : itemSchma,
    listItem:async()=>{
       var list = await itemSchma.find({}).exec();
        return list;
    },
    GetItemById: async (id)=>{
        var list = await itemSchma.find({_id:id}).exec();
        return list;
    },
    AddAnItem: async (params)=>{
        var newItem = await itemSchma(params);
        await newItem.save();
        await console.log("Add Customer success!");
        return newItem;
    },
    UpdateAnItem :async (params)=>{ //param {id:'id',update:{name:'Lap Trinh Win'}}
        var UpdateItem = await itemSchma.findByIdAndUpdate(params.id,params.update);
        return  UpdateItem;
    },
    DeleteAnItem : async (param)=>{
        var deleteItem = await itemSchma.findByIdAndDelete(param);
        return deleteItem;
    }
}