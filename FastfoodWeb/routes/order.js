var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('order', { title: 'Express' });
});

router.post('/',(req,res) =>{

})

module.exports = router;
