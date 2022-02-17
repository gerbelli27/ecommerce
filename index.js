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
var cart =  0;
var quantity = 0;
var product = [{
    product: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: "125.00",
    quantity: 0
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
    cart = product[0].quantity
    quantity = 0;
    showQuantity.innerHTML = quantity;
})

/* Show Cart \\\\\\\\\\\ 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

const cartButton = document.querySelector('.cart');

cartButton.addEventListener('click', () => {
   if(cart > 0){
       
    console.log(product[0].product + "$" + product[0].price + "X" +  cart  + " " + (cart * product[0].price));
   }else{
       window.alert('Your cart is empty !')
   }
})

