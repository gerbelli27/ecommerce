(()=>{const e=document.querySelector(".menu__list"),t=document.querySelector(".quantity"),c=document.querySelector(".img-pop-bg");document.querySelector(".menu").addEventListener("click",(()=>{e.classList.toggle("menu__list--active")})),document.querySelector(".close").addEventListener("click",(()=>{e.classList.toggle("menu__list--active")})),document.querySelector(".glass").addEventListener("click",(()=>{e.classList.toggle("menu__list--active")})),document.querySelector(".close-pop").addEventListener("click",(()=>{c.classList.toggle("img-pop-bg-active")}));const r=[{product:"Fall Limited Edition Sneakers",brand:"SNEAKER COMPANY",price:"125.00",quantity:0,total:0}];let o=0,{quantity:i}=r[0];function s(e){const t=document.querySelector(".cart__itens");t.innerHTML="",t.classList.remove("cart__itens"),document.querySelector(".showcart i").remove(),document.querySelector(".btn__checkout").remove(),document.querySelector(".showcart span").innerHTML='<img class="showcart__img-product"><i>Your Cart is empty</i><img class="showcart__img-delete"> ',i=0}function n(e){console.log(r[0])}t.innerHTML=o,document.querySelector(".plus").addEventListener("click",(()=>{o+=1,t.innerHTML=o})),document.querySelector(".minus").addEventListener("click",(()=>{o>1&&(o-=1,t.innerHTML=o)})),document.querySelector(".add-cart").addEventListener("click",(()=>{if(o>0){i+=o,o=0,r[0].quantity=i,r[0].total=i*r[0].price,t.innerHTML=o,document.querySelector(".cart-user i").classList.add("cart__itens"),document.querySelector(".cart__itens").innerText=i;const e=document.querySelector(".showcart");document.querySelector(".showcart span").remove(),e.innerHTML=`<p class="showcart__cart">Cart</p><span><img class="showcart__img-product" src="./images/image-product-1-thumbnail.jpg"><i>${r[0].product}<br>$${r[0].price} X${r[0].quantity}<b> $${r[0].total}</b></i><img class="showcart__img-delete" src="./images/icon-delete.svg" alt=""></span><button class="btn__checkout">Checkout<button/>`,document.querySelector(".showcart__img-delete").addEventListener("click",s),document.querySelector(".btn__checkout").addEventListener("click",n)}}));const a=document.querySelector(".cart"),l=document.querySelector(".showcart");a.addEventListener("click",(()=>{l.classList.toggle("showcart--active")}));let u=1;const m=document.querySelectorAll(".thumbnail"),d=document.querySelector(".img-pop-bg");m.forEach((function(e){e.addEventListener("click",(({currentTarget:t})=>{const c=t.src;d.classList.contains("img-pop-bg-active")?(document.querySelector(".image-pop").src=c.replace("-thumbnail",""),u=+c.replace(/[^0-9]/g,"").slice(-1)):(document.querySelector(".image").src=c.replace("-thumbnail",""),u=+c.replace(/[^0-9]/g,"").slice(-1)),m.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}))})),document.querySelectorAll(".nxt").forEach((function(e){e.addEventListener("click",(()=>{if(d.classList.contains("img-pop-bg-active"))if(u>=1&&u<4){u+=1;const e=`./images/image-product-${u}.jpg`;document.querySelector(".image-pop").src=e}else u=4;else if(u>=1&&u<4){u+=1;const e=`./images/image-product-${u}.jpg`;document.querySelector(".image").src=e}else u=4}))})),document.querySelectorAll(".pvs").forEach((function(e){e.addEventListener("click",(()=>{if(d.classList.contains("img-pop-bg-active"))if(u<=4&&u>1){u-=1;const e=`./images/image-product-${u}.jpg`;document.querySelector(".image-pop").src=e}else u=1;else if(u<=4&&u>1){u-=1;const e=`./images/image-product-${u}.jpg`;document.querySelector(".image").src=e}else u=1}))})),document.querySelector(".image").addEventListener("click",(()=>{c.classList.toggle("img-pop-bg-active");const e=`./images/image-product-${u}.jpg`;document.querySelector(".image-pop").src=e,m.forEach((e=>{e.classList.remove("active")}))}))})();