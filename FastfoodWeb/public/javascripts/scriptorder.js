
var URLPizzas = 'http://127.0.0.1:3000/pizzas';
var URLPizzaToppings = 'http://127.0.0.1:3000/pizzatoppings';
var URLPizzaCakeBorders = 'http://127.0.0.1:3000/cakeborder';
var URLAuthUser = 'http://127.0.0.1:3000/auth/me';
var URLCartByCus = 'http://127.0.0.1:3000/carts/cus';
var URLBills = 'http://127.0.0.1:3000/carts/cus';
var URLBillsDetails = 'http://127.0.0.1:3000/carts/cus';

var toppingshtml = '';
var cakebordershtml = '';
var user;
var pizza;
var cakeBorder;
var topping;
var sumAmount = 0;
var billId ;
var token = getCookie('token');
var listCart;
console.log(token);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function GetUser(callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
    fetch(URLAuthUser, options)
        .then(function (repos) {
            console.log(repos);
            return repos.json();
        }).then(callback)
}

function GetPizzas(callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzas, options)
        .then(function (repos) {
            console.log(repos);
            return repos.json();
        }).then(callback)
}

function GetCart(CusID, callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLCartByCus +'/'+ CusID, options)
        .then(function (repos) {
            console.log(repos);
            return repos.json();
        }).then(callback)
}

function GetPizza(pizzaID,callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzas +'/'+ pizzaID, options)
        .then(function (repos) {
            return repos.json();
        }).then(callback)
}

function TempPizza(data) {
     pizza =  data.data
}

function GetCakeBorder(cakeBorderID,callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzaCakeBorders +'/'+ cakeBorderID, options)
        .then(function (repos) {
            return repos.json();
        }).then(callback)
}

function TempCakeBorder(data) {
     cakeBorder =  data.data
}

function GetTopping(toppingID,callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzaToppings +'/'+ toppingID, options)
        .then(function (repos) {
            return repos.json();
        }).then(callback)
}

function TempTopping(data) {
     topping = data.data
}

function GetPizzaToppings(callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzaToppings, options)
        .then(function (repos) {
            console.log(repos);
            return repos.json();
        }).then(callback)
}

function GetPizzaCakeBorders(callback) {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(URLPizzaCakeBorders, options)
        .then(function (repos) {
            console.log(repos);
            return repos.json();
        }).then(callback)
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let account = document.querySelector('.my-infos');

document.querySelector('#user-btn').onclick = () => {
    account.classList.toggle('active');
}


let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myOrders.classList.toggle('active');
}

let heartt = document.querySelector('.heart');

document.querySelector('#heart-btn').onclick = () => {
    heartt.classList.toggle('active');
}


window.onscroll = () => {
    myOrders.classList.remove('active');   
    heartt.classList.remove('active');
};

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
});

function ShowPizza(data) {
    var tablePizzas = document.getElementById("pizzasTable");
    console.log(data);
    var Pizzas = data.data.map(function (pizzas) {
        return ` <div class="box">
                    <div class="price"><span>${pizzas.cost}</span>VND</div>
                    <div class="small_card">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img src=${pizzas.img} alt="">
                    <div class="name">${pizzas.pizzaName}</div>
                    <form class="addCart" id=${pizzas._id}  method="POST">
                        <input type="hidden" name="pizzaId" value= ${pizzas._id} />
                        <input type="hidden" name="customId" value= ${user.customId} />
                        <input type="hidden" name="pizzaName" value= "${pizzas.pizzaName}" />
                        <input type="hidden" name="qualyti" value= 1 />
                        <input type="hidden" name="pizzaImg" value= ${pizzas.img} />
                        <input type="hidden" name="pizzaCost" value= ${pizzas.cost} />
                        <select name="topping" id="PizzaToppings">
                        ${toppingshtml}
                        </select>
                        <select name="cakeBorder" id="PizzaCakeBorders">
                        ${cakebordershtml}
                        </select>
                        <input type="submit" value="add to cart" name="add_to_cart" class="btn">
                    </form>
                </div>`;
    });
    //console.log(Pizzas);
    tablePizzas.innerHTML = Pizzas.join(' ');
    // console.log();
};

function ShowCart(data) {
    var tablePizzas = document.getElementById("myCart");
    tablePizzas.innerHTML = "";
    console.log(data);
    var Pizzas = data.data.map(function (pizzas) {
                    sumAmount += (pizzas.pizzaCost + pizzas.topping.cost + pizzas.cakeBorder.cost) * pizzas.qualyti;
                    return ` <div class="box" id=${pizzas._id}>
                    <a class="fas fa-times" id=${pizzas._id} value= ${pizzas._id} ></a>
                    <img src=${pizzas.pizzaImg} alt="">
                    <div class="content">
                        <p>${pizzas.pizzaName}</p>
                        <form action="" method="post">
                            <select name="size" id="size">
                                <option value=${pizzas.cakeBorderId}>${pizzas.cakeBorder.cakebordername}</option>
                            </select>
                            <select name="de" id="de">
                                <option value=${pizzas.toppingId}>${pizzas.topping.toppingname}</option>
                            </select>
                            <input type="number" class="qty" name="qty" min="1" value=${pizzas.qualyti} max="100">
                        </form>
                        <div class="prices"><span>${pizzas.pizzaCost}</span>Tổng: ${(pizzas.pizzaCost + pizzas.topping.cost + pizzas.cakeBorder.cost) * pizzas.qualyti}</div>
                    </div>
            </div>`;
                });
    var sumSpan = document.getElementById("sumAmount");
    sumSpan.innerHTML = sumAmount;  
    tablePizzas.innerHTML = Pizzas.join(' ');
    listCart = data.data;
    //console.log(listCart);
};

function ShowPizzaToppings(data) {
    var tablePizzaToppings = document.getElementById("PizzaToppings");
    console.log(data.data);
    var PizzaToppingss = data.data.map(function (pizzatoppings) {
        var jsON = {
            "toppingid": pizzatoppings._id,
            "toppingname": pizzatoppings.toppingName,
            "cost": pizzatoppings.cost.toString()
        }
        var value = JSON.stringify(jsON)
        return ` <option value= ${value} >${pizzatoppings.toppingName} + ${pizzatoppings.cost}</option>`;
    });
    //tablePizzaToppings.innerHTML = PizzaToppingss.join(' ');
    toppingshtml = PizzaToppingss;
};

function  ShowPizzaCakeBorders(data) {
    var tablePizzaCakeBorders = document.getElementById("PizzaCakeBorders");
    console.log(data.data);
    var PizzaCakeBorders = data.data.map(function (pizzacakeborders) {
        var jsON = {
            "cakeborderId": pizzacakeborders._id,
            "cakebordername": pizzacakeborders.cakeBorderName,
            "cost": pizzacakeborders.surcharge.toString()
        }
        var value = JSON.stringify(jsON)
        return ` <option value=${value}>${pizzacakeborders.cakeBorderName} + ${pizzacakeborders.surcharge} VND</option>`;
    });
    //tablePizzaCakeBorders.innerHTML = PizzaCakeBorders.join(' ');
    // console.log();
    cakebordershtml = PizzaCakeBorders;
};

function ShowUser(data) {
    user = data.data[0]
    console.log(user);
}

function AddBill()  {
    var bill = {
        customId: user.customId,
        payMentId: 0,
        status: 0,
        describe: 'test' ,
        dateCreate: new Date(),
        sumCost: sumAmount
    }
    return bill
}

function AddBillDetails()  {
    var billdetails = listCart;
    billdetails.forEach(item => {
        delete item.customId;
        delete item._id;
        delete item.createdAt;
        delete item.updatedAt;
        delete item.__v;
        item.BillId = billId;
    });
    return billdetails
}
async function ShowMenuPizza() {
    await GetPizzaCakeBorders(ShowPizzaCakeBorders);
    await GetPizzaToppings(ShowPizzaToppings);
    setTimeout(function() {
        GetPizzas(ShowPizza);
        console.log(user.customId)
        GetCart(user.customId, ShowCart);
    }, 500);
}



ShowMenuPizza()
GetUser(ShowUser)
