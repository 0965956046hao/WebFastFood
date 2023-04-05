
var URLPizzas = 'http://127.0.0.1:3000/pizzas';
var URLPizzaToppings = 'http://127.0.0.1:3000/pizzatoppings';
var URLPizzaCakeBorders = 'http://127.0.0.1:3000/cakeborder';

var toppingshtml = '';
var cakebordershtml = '';

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

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
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
    console.log(data.data);
    var Pizzas = data.data.map(function (pizzas) {
        return ` <div class="box">
                    <div class="price"><span>${pizzas.cost}</span>VND</div>
                    <div class="small_card">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img src=${pizzas.img} alt="">
                    <div class="name">${pizzas.pizzaName}</div>
                    <form action="" method="post">
                        <input type="hidden" name="ID" value= ${pizzas._id} />
                        <select name="toppings" id="PizzaToppings">
                        ${toppingshtml}
                        </select>
                        <select name="cakeborders" id="PizzaCakeBorders">
                        ${cakebordershtml}
                        </select>
                    </form>
                    <input type="submit" value="add to cart" name="add_to_cart" class="btn">
                </div>`;
    });
    tablePizzas.innerHTML = Pizzas.join(' ');
    // console.log();
};

function ShowPizzaToppings(data) {
    var tablePizzaToppings = document.getElementById("PizzaToppings");
    console.log(data.data);
    var PizzaToppingss = data.data.map(function (pizzatoppings) {
        return ` <option value="nho">${pizzatoppings.toppingName}</option>`;
    });
    //tablePizzaToppings.innerHTML = PizzaToppingss.join(' ');
    toppingshtml = PizzaToppingss;
};

function  ShowPizzaCakeBorders(data) {
    var tablePizzaCakeBorders = document.getElementById("PizzaCakeBorders");
    console.log(data.data);
    var PizzaCakeBorders = data.data.map(function (pizzacakeborders) {
        return ` <option value="nho">${pizzacakeborders.cakeBorderName}</option>`;
    });
    //tablePizzaCakeBorders.innerHTML = PizzaCakeBorders.join(' ');
    // console.log();
    cakebordershtml = PizzaCakeBorders;
};

async function ShowMenuPizza() {
    await GetPizzaCakeBorders(ShowPizzaCakeBorders);
    await GetPizzaToppings(ShowPizzaToppings);
    GetPizzas(ShowPizza);
}

ShowMenuPizza()
