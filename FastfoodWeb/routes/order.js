var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require("../configs/configs");
const accModel = require('../controllers/accountCtrl');
const cusModel = require('../controllers/customerCtrl');


/* GET home page. */
router.get('/', async function(req, res, next) {
  let token = req.cookies.token;
  console.log(token)
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

})

module.exports = router;
