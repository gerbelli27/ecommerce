const buttonMenu = document.querySelector(".menu");
const menu = document.querySelector('.menu__list');
const buttonClose = document.querySelector('.close');
const close = document.querySelector('.glass')
const closePop = document.querySelector('.close-pop')
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const showQuantity = document.querySelector('.quantity');
const addCart = document.querySelector('.add-cart');
const popUpPhotos = document.querySelector('.img-pop-bg');
const mainPhoto = document.querySelector('.image')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

close.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

mainPhoto.addEventListener('click', () => {
    popUpPhotos.classList.toggle('img-pop-bg-active')
})

closePop.addEventListener('click', () => {
    popUpPhotos.classList.toggle('img-pop-bg-active')
})


/* Cart functions \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
var counterQuantity = 1;
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
        counterQuantity = 1;
        product[0].quantity = quantity;
        product[0].total = quantity * product[0].price;
        showQuantity.innerHTML = counterQuantity;
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

const btn = document.getElementById("btn__checkout")
btn.addEventListener("click", () => {
    window.alert(product[0].product + product[0].brand + product[0].price + product[0].quantity + product[0].total);
    console.log(product[0]);
})

/////Photos functions

var previous = document.querySelector(".previous");
var next = document.querySelector(".next");

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

var previousPop = document.querySelector(".previous-pop");
var nextPop = document.querySelector(".next-pop");

nextPop.addEventListener("click", () => {
    if (counter < 4 && counter > 0) {
        counter++;
        let path = `./images/image-product-${counter}.jpg`;
        document.querySelector(".image-pop").src = path;
    } else {
        counter = 4;
    }

})

previousPop.addEventListener("click", () => {
    if (counter > 1 && counter <= 5) {
        counter--;
        let path = `./images/image-product-${counter}.jpg`;
        document.querySelector(".image-pop").src = path;
    } else {
        counter = 1
    }

})

const thumbs = document.querySelectorAll(".thumbnail");

for (let contador = 0; contador < thumbs.length; contador++) {
    const buttonThumbs = thumbs[contador]
    const img = thumbs[contador].src;

    buttonThumbs.onclick = function () {
        document.querySelector(".image").src = img.replace("-thumbnail", "")
    }

}

const thumbspop = document.querySelectorAll(".thumbnail-pop");

for (let contador = 0; contador < thumbspop.length; contador++) {
    const buttonThumbs = thumbspop[contador]
    const img = thumbspop[contador].src;

    buttonThumbs.onclick = function () {
        document.querySelector(".image-pop").src = img.replace("-thumbnail", "")
    }

}