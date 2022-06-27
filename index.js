const menu = document.querySelector(".menu__list");
const showQuantity = document.querySelector(".quantity");
const popUpPhotos = document.querySelector(".img-pop-bg");

const buttonMenu = document.querySelector(".menu");
buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const buttonClose = document.querySelector(".close");
buttonClose.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const close = document.querySelector(".glass");
close.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const mainPhoto = document.querySelector(".image");
mainPhoto.addEventListener("click", () => {
  popUpPhotos.classList.toggle("img-pop-bg-active");
});

const closePop = document.querySelector(".close-pop");
closePop.addEventListener("click", () => {
  popUpPhotos.classList.toggle("img-pop-bg-active");
});

// Cart functions

const product = [
  {
    product: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    price: "125.00",
    quantity: 0,
    total: 0,
  },
];

let counterQuantity = 0;
let { quantity } = product[0];
showQuantity.innerHTML = counterQuantity;

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  counterQuantity += 1;
  showQuantity.innerHTML = counterQuantity;
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  if (counterQuantity > 1) {
    counterQuantity -= 1;
    showQuantity.innerHTML = counterQuantity;
  }
});

const addCart = document.querySelector(".add-cart");
addCart.addEventListener("click", () => {
  if (counterQuantity > 0) {
    quantity += counterQuantity;
    counterQuantity = 0;
    product[0].quantity = quantity;
    product[0].total = quantity * product[0].price;
    showQuantity.innerHTML = counterQuantity;
    document.querySelector(".cart-user i").classList.add("cart__itens");
    document.querySelector(".cart__itens").innerText = quantity;
    const showcart = document.querySelector(".showcart");
    const span = document.querySelector(".showcart span").remove();
    showcart.innerHTML = `<p class="showcart__cart">Cart</p><span><img class="showcart__img-product" src="./images/image-product-1-thumbnail.jpg"><i>${product[0].product}<br>$${product[0].price} X${product[0].quantity}<b> $${product[0].total}</b></i><img class="showcart__img-delete" src="./images/icon-delete.svg" alt=""></span><button class="btn__checkout">Checkout<button/>`;

    document
      .querySelector(".showcart__img-delete")
      .addEventListener("click", sendToBin);

    document
      .querySelector(".btn__checkout")
      .addEventListener("click", checkout);
  }
});

function sendToBin(event) {
  const cart = document.querySelector(".cart__itens");
  cart.innerHTML = "";
  cart.classList.remove("cart__itens");
  document.querySelector(".showcart i").remove();
  document.querySelector(".btn__checkout").remove();
  const span = document.querySelector(".showcart span");
  span.innerHTML = `<img class="showcart__img-product"><i>Your Cart is empty</i><img class="showcart__img-delete"> `;
  quantity = 0;
}

function checkout(event) {
  console.log(product[0]);
}

// Show Cart

const cartButton = document.querySelector(".cart");
const showCart = document.querySelector(".showcart");

cartButton.addEventListener("click", () => {
  showCart.classList.toggle("showcart--active");
});

/// //Photos functions

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const thumbs = document.querySelectorAll(".thumbnail");

let counter = 1;

next.addEventListener("click", () => {
  if (counter < thumbs.length && counter > 0) {
    counter += 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image").src = path;
  } else {
    counter = 4;
  }
});

previous.addEventListener("click", () => {
  if (counter > 1 && counter <= thumbs.length) {
    counter -= 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image").src = path;
  } else {
    counter = 1;
  }
});

const previousPop = document.querySelector(".previous-pop");
const nextPop = document.querySelector(".next-pop");

nextPop.addEventListener("click", (item) => {
  if (counter < thumbs.length && counter > 0) {
    counter += 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image-pop").src = path;
  } else {
    counter = 4;
  }
});

previousPop.addEventListener("click", (event) => {
  if (counter > 1 && counter <= thumbs.length) {
    counter -= 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image-pop").src = path;
  } else {
    counter = 1;
  }
});

for (let i = 0; i < thumbs.length; i++) {
  const buttonThumbs = thumbs[i];
  const img = thumbs[i].src;

  buttonThumbs.onclick = () => {
    document.querySelector(".image").src = img.replace("-thumbnail", "");
    document.querySelector(".image-pop").src = img.replace("-thumbnail", "");
    thumbs.forEach((item) => {
      item.classList.remove("active");
    });
    buttonThumbs.classList.add("active");
  };
}

const thumbspop = document.querySelectorAll(".thumbnail-pop");
for (let i = 0; i < thumbspop.length; i++) {
  const buttonThumbs = thumbspop[i];
  const img = thumbspop[i].src;

  buttonThumbs.onclick = function (item) {
    document.querySelector(".image-pop").src = img.replace("-thumbnail", "");
    thumbspop.forEach((item) => {
      item.classList.remove("active");
    });
    buttonThumbs.classList.add("active");
  };
}
