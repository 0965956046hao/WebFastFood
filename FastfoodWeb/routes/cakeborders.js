var express = require('express');
var ItemModel = require('../controllers/cakeBorderCtrl');
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