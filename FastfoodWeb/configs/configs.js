const mongoose = require('mongoose');

const url = "mongodb+srv://hao2312:Wg6HQR0AYXaAGMmL@cluster0.lljncgi.mongodb.net/FastfoodWeb?retryWrites=true&w=majority";

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connect db success!");
}).catch((err) => {
    throw err;
    //console.log(err);
});

module.exports = {
    mongoose: mongoose,
    HOST:'http://127.0.0.1:3000/',
    pizzas_collection:'pizzas',
    hambergers_collection:'hambergers',
    singlefoods_collection:'singlefoods',
    accounts_collection:'accounts',
    customers_collection:'customers',
    foodtypes_collection:'foodtypes',
    pizzatoppings_collection:'pizzatoppings',
    hambergertoppings_collection:'hambergertoppings',
    cakeborders_collection:'cakeborders',
    bills_collection: 'bills',
    billdetail_collection: 'pizzabillsdetails',
    carts_collection:'carts',
    JWT_SECRET:'123456ehehe',
    JWT_EXPIRE:'3d',
    COOKIE_EXPIRE:'30',
    SMTP_Host:'smtp.ethereal.email',
    SMTP_Port:'587',
    SMTP_Username:'jenifer.rippin@ethereal.email',
    SMTP_Password:'ANUvnWUtn4Ra3JUFEf',
    SMTP_Auth:'PLAIN, LOGIN and CRAM-MD5',
    SMTP_TLS:'Optional (STARTTLS on all ports)',
}