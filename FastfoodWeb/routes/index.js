var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res) =>{
  console.log(req.body);
  if(req.body.loginorregister == "register now")
      accountsControleer.CreateAccountHandle(req);
  else
      accountsControleer.Login(req);
  res.render('index', { title: 'Express' });
})

module.exports = router;
