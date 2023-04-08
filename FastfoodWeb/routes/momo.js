var express = require('express');
var momo = require('../controllers/momoCtrl');
const errorHandle = require('../configs/errorHandle');
var router = express.Router();

router.post('/pay', async function(req, res, next) {
    try {
        var list = await momo.momopayment(req.body);
        errorHandle.returnResult(res, 200, true, list);
    } catch (error) {
        errorHandle.returnResult(res, 400, false, error);
    }

});

module.exports = router;
