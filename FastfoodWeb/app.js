var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var orderRouter = require('./routes/order');
var customerssRouter = require('./routes/customers');
var accountsRouter = require('./routes/accounts');
var cakeborderRouter = require('./routes/cakeborders');
var foodtypeRouter = require('./routes/foodtypes');
var hambergersRouter = require('./routes/hambergers');
var hambergerstoppingsRouter = require('./routes/hambergertoppings');
var pizzasRouter = require('./routes/pizzas');
var pizzastoppingsRouter = require('./routes/pizzatoppings');
var singlefoodsRouter = require('./routes/singlefoods');
var billsRouter = require('./routes/bills');
var customerActionsRouter = require('./routes/customerActions');
var customerAuditingRouter = require('./routes/customerAuditing');
var hambergerBillsDetailsRouter = require('./routes/hambergerBillsDetails');
var pizzaBillsDetailsRouter = require('./routes/pizzaBillsDetails');
var singleFoodBillDetailsRouter = require('./routes/singleFoodBillDetails');
var soleTypesRouter = require('./routes/soleTypes');
var cartsRouter = require('./routes/carts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', indexRouter);
app.use('/auth', authRouter);
app.use('/order', orderRouter);
app.use('/customers', customerssRouter);
app.use('/accounts', accountsRouter);
app.use('/cakeborder', cakeborderRouter);
app.use('/foodtype', foodtypeRouter);
app.use('/hambergers', hambergersRouter);
app.use('/hambergertoppings', hambergerstoppingsRouter);
app.use('/pizzas', pizzasRouter);
app.use('/pizzatoppings', pizzastoppingsRouter);
app.use('/singlefoods', singlefoodsRouter);
app.use('/bills', billsRouter);
app.use('/customerActions', customerActionsRouter);
app.use('/customerAuditing', customerAuditingRouter);
app.use('/hambergerBillsDetails', hambergerBillsDetailsRouter);
app.use('/pizzaBillsDetails', pizzaBillsDetailsRouter);
app.use('/singleFoodBillDetails', singleFoodBillDetailsRouter);
app.use('/soleTypes', soleTypesRouter);
app.use('/carts', cartsRouter);
app.use(cors());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




module.exports = app;