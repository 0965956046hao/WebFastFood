
const Accounts = require('../controllers/accountCtrl');
const Customers = require('../controllers/customerCtrl');
const mongoose = require('mongoose');

module.exports ={
    CreateAccountHandle: function (req){
        var email = req.body.email;
        var pass = req.body.pass;
        var cpass = req.body.cpass;
        
        var paramsCus = {
                            "_id": new mongoose.Types.ObjectId(),
                            "fullName"	:	"khang123",
                            "age"	:	18,
                            "local"	:	"Hao",
                            "sDT"	:	"Hao",
                            "sex"	:	true,
                            "birth"	:	"2019-07-04T13:33:03.969Z",
                            "modified":{
                                "modified_by_user_name"	:	"Hao",
                                "modified_by_user_id"	:	"Hao"
                            },
                            "created"	:{
                                "created_by_user_name"	:	"Hao",
                                "created_by_user_id"	:	"Hao"
                            },
                            "status"	:	"Hao",
                            "orderring"	:	"Hao"
                        };
        
        var paramsAcc = {
                            "customId"	:	paramsCus._id,
                            "useName"	:	req.body.email,
                            "passWord"	:	req.body.pass,
                            "dateCreate"	:	new Date().toISOString(),
                            "modified":{
                                "modified_by_user_name"	:	"Hao",
                                "modified_by_user_id"	:	"Hao"
                            },
                            "created"	:{
                                "created_by_user_name"	:	"Hao",
                                "created_by_user_id"	:	"Hao"
                            },
                            "status"	:	"Hao",
                            "orderring"	:	"Hao"
                        };                
        //const date = new Date(2020, 09, 11);
      
        if(pass == cpass)
        {
      
            const a = Accounts.schema.count({useName: String(email)}).then((count) => {
                if(count == 0)
                {
                    const cus = Customers.AddAnItem(paramsCus);
                    const acc = Accounts.AddAnItem(paramsAcc);
                }
                else
                alert("usename da ton tai");
            }).catch((err) =>{
                throw err;
            });
      
        }
        else
          alert("cpass khong đúng");
        //listDatabases(mmongo);
      },
      
      Login: function (req){
        var email = req.body.email;
        var pass = req.body.pass;
      
        const queryAccounts = Accounts.schema.find({useName: email, passWord: pass}).then((docs) => {
            if(docs.length > 0)
                console.log(docs);
            else
                console.log("sai tk hoac mk");
        }).catch((err) => {
            throw err;
        })
      }
}
