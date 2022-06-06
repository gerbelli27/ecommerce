
const menu = document.querySelector('.menu__list');
const showQuantity = document.querySelector('.quantity');
const showTotal = document.querySelector('.price');
const popUpPhotos = document.querySelector('.img-pop-bg');


const buttonMenu = document.querySelector(".menu");
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

const buttonClose = document.querySelector('.close');
buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

const close = document.querySelector('.glass')
close.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

const mainPhoto = document.querySelector('.image')
mainPhoto.addEventListener('click', () => {
    popUpPhotos.classList.toggle('img-pop-bg-active')
})

const closePop = document.querySelector('.close-pop')
closePop.addEventListener('click', () => {
    popUpPhotos.classList.toggle('img-pop-bg-active')
})


// Cart functions

let product = [{
    product: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: "125.00",
    quantity: 0,
    total: 0
}]

let counterQuantity = 1;
let quantity = product[0].quantity;
showQuantity.innerHTML = counterQuantity;

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    counterQuantity++
    showQuantity.innerHTML = counterQuantity;
})

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    if (counterQuantity > 1) {
        counterQuantity--
        showQuantity.innerHTML = counterQuantity;
    }
})


const addCart = document.querySelector('.add-cart');
addCart.addEventListener('click', () => {
    if (counterQuantity > 0) {
        quantity += + counterQuantity;
        counterQuantity = 1;
        product[0].quantity = quantity;
        product[0].total = quantity * product[0].price;
        showQuantity.innerHTML = counterQuantity;
        document.querySelector(".cart-user i").classList.add("cart__itens")
        document.querySelector(".cart__itens").innerText = quantity
    }
})

/* Show Cart \\\\\\\\\\\ */

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

for (let i = 0; i < thumbs.length; i++) {
    const buttonThumbs = thumbs[i]
    const img = thumbs[i].src;

    buttonThumbs.onclick = function () {
        document.querySelector(".image").src = img.replace("-thumbnail", "")
        document.querySelector(".image-pop").src = img.replace("-thumbnail", "")
    }

}

const thumbspop = document.querySelectorAll(".thumbnail-pop");
for (let i = 0; i < thumbspop.length; i++) {
    const buttonThumbs = thumbspop[i]
    const img = thumbspop[i].src;

    buttonThumbs.onclick = function () {
        document.querySelector(".image-pop").src = img.replace("-thumbnail", "")
    }

}