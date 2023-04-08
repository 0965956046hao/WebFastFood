var itemSchma = require('../models/Bills');
const Auditing = require('../controllers/customerAuditingCtrl');
module.exports = {

    schema: itemSchma,
    listItem: async() => {
        var list = await itemSchma.find({}).populate({ path: 'details', select: 'pizzaName pizzaCost qualyti topping cakeBorder' }).exec();
        return list;
    },
    GetItemByCusId: async(id) => {
        var list = await itemSchma.find({ customId: id }).populate({ path: 'details', select: 'pizzaName pizzaCost qualyti topping cakeBorder' }).exec();
        
        var aud = { "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Xem hóa đơn',
                    "dateCreate": new Date()}
            let newAdt = await new Auditing.schema(aud).save();
            return list;
    },
    AddAnItem: async(params) => {
        var newItem = await itemSchma(params);
        await newItem.save();
        console.log("Add Bills success!");
        var aud = { "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Đặt hàng',
                    "dateCreate": new Date()}
            let newAdt = await new Auditing.schema(aud).save();
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