var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();
const Auditing = require('../controllers/customerAuditingCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  var aud = {       "customId": '64243e9fce0941009cfad909',
                    "actionId": 'Vào trang chính',
                    "dateCreate": new Date()}
            let newAdt = new Auditing.schema(aud).save();
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res) =>{

})

module.exports = router;
