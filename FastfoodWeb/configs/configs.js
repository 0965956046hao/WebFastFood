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
    pizzas_collection:'pizzas',
    hambergers_collection:'hambergers',
    singlefoods_collection:'singlefoods',
    accounts_collection:'accounts',
    customers_collection:'customers',
    foodtypes_collection:'foodtypes',
    pizzatoppings_collection:'pizzatoppings',
    hambergertoppings_collection:'hambergertoppings',
    cakeborders_collection:'cakeborders',
    carts_collection:'carts',
    JWT_SECRET:'123456ehehe',
    JWT_EXPIRE:'3d',
    COOKIE_EXPIRE:'30'
}