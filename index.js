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
  }
});

/* Show Cart \\\\\\\\\\\ */

const cartButton = document.querySelector(".cart");
const showCart = document.querySelector(".showcart");

cartButton.addEventListener("click", () => {
  if (quantity > 0) {
    showCart.classList.toggle("showcart--active");
    document.querySelector(".showcart__cart").innerText = "Cart";
    document.querySelector(".showcart__img-product").src =
      "./images/image-product-2-thumbnail.jpg";
    document.querySelector(
      ".showcart__description"
    ).innerHTML = `${product[0].product}<br>$${product[0].price} X${product[0].quantity}<b> $${product[0].total}</b>`;
    document.querySelector(".showcart__img-delete").src =
      "./images/icon-delete.svg";
    document.querySelector(".showcart button").classList.add("btn__checkout");
    document.querySelector(".btn__checkout").innerText = "Checkout";
  } else {
    showCart.classList.toggle("showcart--active");
    document.querySelector(".showcart__cart").innerText = "Cart";
    document.querySelector(".showcart__img-product").src = "./images/sp.png";
    document.querySelector(".showcart__description").innerHTML =
      "Your cart is empty.";
    document.querySelector(".showcart__img-delete").src = "./images/sp.png";
  }
});

const bin = document.querySelector(".showcart__img-delete");

bin.addEventListener("click", () => {
  showCart.classList.toggle("showcart--active");
  document.querySelector(".btn__checkout").innerText = "";
  document.querySelector(".btn__checkout").classList.remove("btn__checkout");
  document.querySelector(".cart__itens").innerText = "";
  document.querySelector(".cart__itens").classList.remove("cart__itens");
  quantity = 0;
});

const btn = document.getElementById("btn__checkout");
btn.addEventListener("click", () => {
  window.alert(
    product[0].product +
      product[0].brand +
      product[0].price +
      product[0].quantity +
      product[0].total
  );
  console.log(product[0]);
});

/// //Photos functions

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let counter = 1;

next.addEventListener("click", () => {
  if (counter < 4 && counter > 0) {
    counter += 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image").src = path;
  } else {
    counter = 4;
  }
});

previous.addEventListener("click", () => {
  if (counter > 1 && counter <= 5) {
    counter -= 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image").src = path;
  } else {
    counter = 1;
  }
});

const previousPop = document.querySelector(".previous-pop");
const nextPop = document.querySelector(".next-pop");

nextPop.addEventListener("click", () => {
  if (counter < 4 && counter > 0) {
    counter += 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image-pop").src = path;
  } else {
    counter = 4;
  }
});

previousPop.addEventListener("click", () => {
  if (counter > 1 && counter <= 5) {
    counter -= 1;
    const path = `./images/image-product-${counter}.jpg`;
    document.querySelector(".image-pop").src = path;
  } else {
    counter = 1;
  }
});

const thumbs = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbs.length; i++) {
  const buttonThumbs = thumbs[i];
  const img = thumbs[i].src;

  buttonThumbs.onclick = function (item) {
    document.querySelector(".image").src = img.replace("-thumbnail", "");
    document.querySelector(".image-pop").src = img.replace("-thumbnail", "");
    thumbs.forEach((iten) => {
      iten.classList.remove("active");
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
