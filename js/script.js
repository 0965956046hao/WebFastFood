let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
        account.classList.add('active');
    }
    // let register = document.querySelector('.user-account-register');
    // document.querySelector('#user-btn').onclick = () => {
    //         register.classList.add('active');

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () => {
    myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
}

let heartt = document.querySelector('.heart');

document.querySelector('#heart-btn').onclick = () => {
    heartt.classList.add('active');
}

document.querySelector('#close-heart').onclick = () => {
    heartt.classList.remove('active');
}

window.onscroll = () => {
    myOrders.classList.remove('active');
    cart.classList.remove('active');
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