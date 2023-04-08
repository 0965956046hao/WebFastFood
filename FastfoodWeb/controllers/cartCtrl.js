var itemSchma = require('../models/Carts');
const Auditing = require('../controllers/customerAuditingCtrl');

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
    GetItemByCusId: async(id) => {
        var list = await itemSchma.find({ customId: id }).exec();
        return list;
    },
    AddAnItem: async(params) => {
        var list = await itemSchma.find({ customId: params.customId,  pizzaId: params.pizzaId}).exec();
        // if(list.length > 0)
        // {
        //     list[0].qualyti++;
        //     console.log(list[0].qualyti)
        // }
        // else
        // console.log('null')
        // var newItem = await itemSchma(params);
        // await newItem.save();
        // console.log("Add  Carts success!");
        // return newItem;
        var aud = { "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Thêm giỏ hàng',
                    "dateCreate": new Date()}
        let newAdt = await new Auditing.schema(aud).save();
        if(list.length > 0)
        {   if(list[0].topping.toppingid == params.topping.toppingid && list[0].cakeBorder.cakeborderId == params.cakeBorder.cakeborderId){
                list[0].qualyti++;
                console.log(list[0])
                var UpdateItem = await itemSchma.findByIdAndUpdate(list[0].id, list[0]);
                console.log("Update  Carts success!");
                return UpdateItem;
            }else{
                var newItem = await itemSchma(params);
                await newItem.save();
                console.log("Add  Carts success!");
                return newItem;
            }
        }
        else{
            var newItem = await itemSchma(params);
            await newItem.save();
            console.log("Add  Carts success!");
            return newItem;
        }
    },
    UpdateAnItem: async(params) => { //param {id:'id',update:{name:'Lap Trinh Win'}}
        var UpdateItem = await itemSchma.findByIdAndUpdate(params.id, params.update);
        return UpdateItem;
    },
    DeleteAnItem: async(param) => {
        var deleteItem = await itemSchma.findByIdAndDelete(param);
        var aud = { "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Xóa hàng',
                    "dateCreate": new Date()}
            let newAdt = await new Auditing.schema(aud).save();
        return deleteItem;
    }
}