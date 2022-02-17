const buttonMenu = document.querySelector(".menu");
const menu = document.querySelector('.menu__list');
const buttonClose = document.querySelector('.close');
const close = document.querySelector('.glass')
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');

const showQuantity = document.querySelector('.quantity');
const addCart = document.querySelector('.add-cart');



buttonMenu.addEventListener('click', () => { 
    menu.classList.toggle('menu__list--active')
})

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

close.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})


var quantity = 0;
var product = [{ product:"Fall Limited Edition Sneakers",
                brand:"SNEAKER COMPANY",
                price:"125.00",
                quantity: 0
}]



plus.addEventListener('click', () => {
    quantity = quantity + 1;
    showQuantity.innerHTML = quantity;
    
})

minus.addEventListener('click', () => {
    if (quantity > 0){
        quantity = quantity - 1;
        showQuantity.innerHTML = quantity;
    console.log(quantity);
    } else {
        window.alert('Plesase add quantity')
    }
})

addCart.addEventListener('click', () => {
    
    product[0].quantity = quantity;
console.log(product);
    quantity = 0;
    showQuantity.innerHTML = quantity;
})

 



