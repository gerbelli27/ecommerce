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

//Photos functions

let photoIndex = 1;

const thumbs = document.querySelectorAll(".thumbnail");
const pop = document.querySelector(".img-pop-bg");
thumbs.forEach(thumb);
function thumb(item) {
  item.addEventListener("click", ({ currentTarget }) => {
    const img = currentTarget.src;
    if (pop.classList.contains("img-pop-bg-active")) {
      document.querySelector(".image-pop").src = img.replace("-thumbnail", "");
      photoIndex = +img.replace(/[^0-9]/g, "").slice(-1);
    } else {
      document.querySelector(".image").src = img.replace("-thumbnail", "");
      photoIndex = +img.replace(/[^0-9]/g, "").slice(-1);
    }
    thumbs.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
}

const next = document.querySelectorAll(".nxt");
next.forEach(nextPhoto);
function nextPhoto(item) {
  item.addEventListener("click", () => {
    if (pop.classList.contains("img-pop-bg-active")) {
      if (photoIndex >= 1 && photoIndex < 4) {
        photoIndex += 1;
        const path = `./images/image-product-${photoIndex}.jpg`;
        document.querySelector(".image-pop").src = path;
      } else {
        photoIndex = 4;
      }
    } else {
      if (photoIndex >= 1 && photoIndex < 4) {
        photoIndex += 1;
        const path = `./images/image-product-${photoIndex}.jpg`;
        document.querySelector(".image").src = path;
      } else {
        photoIndex = 4;
      }
    }
  });
}

const previous = document.querySelectorAll(".pvs");
previous.forEach(previousPhoto);
function previousPhoto(item) {
  item.addEventListener("click", () => {
    if (pop.classList.contains("img-pop-bg-active")) {
      if (photoIndex <= 4 && photoIndex > 1) {
        photoIndex -= 1;
        const path = `./images/image-product-${photoIndex}.jpg`;
        document.querySelector(".image-pop").src = path;
      } else {
        photoIndex = 1;
      }
    } else {
      if (photoIndex <= 4 && photoIndex > 1) {
        photoIndex -= 1;
        const path = `./images/image-product-${photoIndex}.jpg`;
        document.querySelector(".image").src = path;
      } else {
        photoIndex = 1;
      }
    }
  });
}

const mainPhoto = document.querySelector(".image");
mainPhoto.addEventListener("click", () => {
  popUpPhotos.classList.toggle("img-pop-bg-active");
  const path = `./images/image-product-${photoIndex}.jpg`;
  document.querySelector(".image-pop").src = path;
  thumbs.forEach((item) => {
    item.classList.remove("active");
  });
});
