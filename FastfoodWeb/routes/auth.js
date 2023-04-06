var express = require('express');
var accountsControleer = require('../controllers/login&registerCtrl');
var router = express.Router();
var validator = require('../validator/auth');
var handleResult  = require('../configs/errorHandle');
const protectMiddleware = require('../middleware/protect');
var config  = require('../configs/configs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login-register', { title: 'Express' });
});

router.post('/',(req,res) =>{
  console.log(req.body);
  // if(req.body.loginorregister == "register now")
  //     accountsControleer.CreateAccountHandle(req);
  // else
  //     accountsControleer.Login(req);
  //res.render('login-register', { title: 'Express' });
})

router.post('/register',validator.ValidationRule(),validator.Validate ,async function(req, res, next) {
  console.log(req.body);
  try {
    var token = await accountsControleer.Register(req.body);
    handleResult.returnResult(res,200,true,token);
  } catch (error) {
    console.log(error.message);
    handleResult.returnResult(res,400,false,error.message);
  }
});

router.post('/login',async function(req, res, next) {
  try {
    var result = await accountsControleer.Login(req.body);
    if(!result.error){
      //saveCookieResponse(res,200,result);
      res.cookie("token", result);
      return res.redirect("/order");
    }else{
      //handleResult.returnResult(res,400,false,result);
      return res.redirect("/auth?msg=fail");
    }
  } catch (error) {
    //handleResult.returnResult(res,400,false,error);
    return res.redirect("/auth?msg=fail");
  }
});

router.get('/me',protectMiddleware.protect,async function(req, res, next) {
  try {
    handleResult.returnResult(res,200,false,req.user);
  } catch (error) {
    handleResult.returnResult(res,400,false,error);
  }
});

router.get('/logout',async function(req, res, next) {
  try {
    const option = {
      expirers: new Date(Date.now()+1000),
      httpOnly:true
    }
      res.cookie("token", 'none');
      return res.redirect("/auth");
  } catch (error) {
    handleResult.returnResult(res,400,false,error);
  }
});

function saveCookieResponse(res,satusCode,token){
  const option = {
    expirers: new Date(Date.now()+config.COOKIE_EXPIRE*24*3600*1000),
    httpOnly:true
  }
  res.cookie('token',token,option).json({
    success:true,
    data:token
  })
}

module.exports = router;
