var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require("../configs/configs");
const accModel = require('../controllers/accountCtrl');
const cusModel = require('../controllers/customerCtrl');
const Auditing = require('../controllers/customerAuditingCtrl');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let token = req.cookies.token;
  var aud = { "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Vào trang order',
                    "dateCreate": new Date()}
            let newAdt = await new Auditing.schema(aud).save();
  console.log(req)
  if(token != 'none'){
    var decode = jwt.verify(token, config.JWT_SECRET);
    var user = await accModel.GetItemById(decode.id);
    var userId = user[0].customId;
    var cus = await cusModel.GetItemById(userId);
    var userName = cus[0];
    console.log(userName)
    res.render('order',{userId,userName});
  }
  else
  return res.redirect("/auth");
});

router.post('/',(req,res) =>{
  console.log(req)
  const partnerCode = req.body.partnerCode;
  const orderId = req.body.orderId;
  const amount = req.body.amount;
  const orderInfo = req.body.orderInfo;
  const orderType = req.body.orderType;
  const transId = req.body.transId;
  const message = req.body.message;
  const localMessage = req.body.localMessage;
  const errorCode = req.body.errorCode;
  const payType = req.body.payType;
  const extraData = req.body.extraData;
  console.log(message)
  res.send(message)
})

module.exports = router;
