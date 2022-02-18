const buttonMenu = document.querySelector(".menu");
const menu = document.querySelector('.menu__list');
const buttonClose = document.querySelector('.close');
const close = document.querySelector('.glass')
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

const showQuantity = document.querySelector('.quantity');
const addCart = document.querySelector('.add-cart');

/* Side Menu Mobile \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

close.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

/* Cart functions \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

var quantity = 0;
var product = [{
    product: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: "125.00",
    quantity: 0,
    total: 0
}]

/* Buttons quantity*/

plus.addEventListener('click', () => {
    quantity = quantity + 1;
    showQuantity.innerHTML = quantity;
})

minus.addEventListener('click', () => {
    if (quantity > 0) {
        quantity = quantity - 1;
        showQuantity.innerHTML = quantity;
    } else {
        window.alert('Please add quantity')
    }
})

addCart.addEventListener('click', () => {
    product[0].quantity = quantity;
    product[0].total = quantity * product[0].price;
    quantity = 0;
    showQuantity.innerHTML = quantity;

    /* ja faz um Inner no Icone do Carrinho */
})

/* Show Cart \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

const cartButton = document.querySelector('.cart');
const showCart = document.querySelector('.showcart');

cartButton.addEventListener('click', () => {
    if (product[0].quantity > 0) {
        document.querySelector(".showcart__cart").innerText = "Cart";
        document.querySelector(".showcart__img-product").src = './images/image-product-2-thumbnail.jpg'
        document.querySelector(".showcart__description").innerHTML = product[0].product + "<br>$" + product[0].price + " X" + product[0].quantity + "<b> $" + product[0].total + "</b>"
        document.querySelector(".showcart__img-delete").src = './images/icon-delete.svg'
        document.querySelector(".showcart button").classList.add("btn__checkout");
        document.querySelector(".btn__checkout").innerText = "Checkout";   
    }
})
