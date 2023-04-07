var express = require('express');
var ItemModel = require('../controllers/pizzaBillsDetailsCtrl');
var ShowResult = require('../configs/errorHandle');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        var list = await ItemModel.listItem();
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }
});

router.get('/:id', async function(req, res, next) {
    let ID = req.params.id;
    try {
        var list = await ItemModel.GetItemById(ID);
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }
});

router.post('/add', async function(req, res, next) {
    try {
        console.log(req.body)
        var list = await ItemModel.AddAnItem(req.body);
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }

});

router.post('/addarray', async function(req, res, next) {
    try {
        console.log(req.body)
        var i = '[{"topping":{"toppingid":"6428f8be7d27380c49be01ca","toppingname":"Cà-chua","cost":10000},"cakeBorder":{"cakeborderId":"6428fc047d27380c49be01ed","cakebordername":"Viền-xúc-xích","cost":7000},"pizzaId":"6428f4f07d27380c49be019f","pizzaName":"Pizza Nổi","pizzaImg":"./images/pizza-8.jpg","pizzaCost":120000,"qualyti":2,"BillId":"642ff7b078bdc0a20697f6e5"},{"topping":{"toppingid":"6428f8be7d27380c49be01ca","toppingname":"Cà-chua","cost":10000},"cakeBorder":{"cakeborderId":"6428fc047d27380c49be01ed","cakebordername":"Viền-xúc-xích","cost":7000},"pizzaId":"6428f4f07d27380c49be0198","pizzaName":"Pizza Cửu Mộc","pizzaImg":"./images/pizza-1.jpg","pizzaCost":90000,"qualyti":1,"BillId":"642ff7b078bdc0a20697f6e5"}]';
        var x = JSON.stringify(i);
        console.log(x)
        var list = await ItemModel.AddArrayItem(x);
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }
});

router.post('/deletearray', async function(req, res, next) {
    try {
        console.log(req.body)
        var list = await ItemModel.DeleteArrayItem(req.body);
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }
});

router.put('/edit/:id', async function(req, res, next) {
    let params = {};
    params.id = req.params.id;
    params.update = req.body;
    var list = await ItemModel.UpdateAnItem(params);
    ShowResult.returnResult(res, 200, true, list);
});


router.delete('/delete/:id', async function(req, res, next) {
    try {
        var list = await ItemModel.DeleteAnItem(req.params.id);
        ShowResult.returnResult(res, 200, true, list);
    } catch (error) {
        ShowResult.returnResult(res, 400, false, error);
    }
});

module.exports = router;