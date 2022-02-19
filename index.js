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
var counterQuantity = 0;
var quantity = 0
var product = [{
    product: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: "125.00",
    quantity: 0,
    total: 0
}]

/* Buttons quantity*/

showQuantity.innerHTML = counterQuantity;

plus.addEventListener('click', () => {
    counterQuantity++
    showQuantity.innerHTML = counterQuantity;
})

minus.addEventListener('click', () => {
    if (counterQuantity > 1) {
        counterQuantity--
        showQuantity.innerHTML = counterQuantity;
    }
})

addCart.addEventListener('click', () => {
    if (counterQuantity > 0) {
        quantity = quantity + counterQuantity;
        counterQuantity = 0;
        product[0].quantity = quantity;
        product[0].total = quantity * product[0].price;
        showQuantity.innerHTML = 0;
        document.querySelector(".cart-user i").classList.add("cart__itens")
        document.querySelector(".cart__itens").innerText = quantity
    }
})

/* Show Cart \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

const cartButton = document.querySelector('.cart');
const showCart = document.querySelector('.showcart');

cartButton.addEventListener('click', () => {
    if (quantity > 0) {
        showCart.classList.toggle('showcart--active')
        document.querySelector(".showcart__cart").innerText = "Cart";
        document.querySelector(".showcart__img-product").src = './images/image-product-2-thumbnail.jpg'
        document.querySelector(".showcart__description").innerHTML = product[0].product + "<br>$" + product[0].price + " X" + product[0].quantity + "<b> $" + product[0].total + "</b>"
        document.querySelector(".showcart__img-delete").src = './images/icon-delete.svg'
        document.querySelector(".showcart button").classList.add("btn__checkout");
        document.querySelector(".btn__checkout").innerText = "Checkout";
    } else {
        showCart.classList.toggle('showcart--active')
        document.querySelector(".showcart__cart").innerText = "Cart";
        document.querySelector(".showcart__img-product").src = './images/sp.png'
        document.querySelector(".showcart__description").innerHTML = "Your cart is empty."
        document.querySelector(".showcart__img-delete").src = './images/sp.png'
    }
})

const bin = document.querySelector('.showcart__img-delete')

bin.addEventListener('click', () => {
    showCart.classList.toggle('showcart--active')
    document.querySelector(".btn__checkout").innerText = "";
    document.querySelector(".btn__checkout").classList.remove("btn__checkout")
    document.querySelector(".cart__itens").innerText = "";
    document.querySelector(".cart__itens").classList.remove("cart__itens")
    quantity = 0;
})

/////Photos functions

previous = document.querySelector(".previous");
next = document.querySelector(".next");

let counter = 1

next.addEventListener("click", () => {
    if (counter < 4 && counter > 0) {
        counter++;
        let path = `./images/image-product-${counter}.jpg`;
        document.querySelector(".image").src = path;
    } else {
        counter = 4;
    }

})

previous.addEventListener("click", () => {
    if (counter > 1 && counter <= 5) {
        counter--;
        let path = `./images/image-product-${counter}.jpg`;
        document.querySelector(".image").src = path;
    } else {
        counter = 1
    }

})