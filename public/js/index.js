// ! PRODUCT BUTTONS
const product_buttons = document.querySelectorAll(".products_buttons_wrapper button");
const product_container = document.querySelectorAll(".products_wrapper");
const you_may_like_image_selector = document.querySelectorAll('.image_wrapper');
const you_may_like_main_img = document.querySelector('.main_img');
const cart_item_number = document.querySelector('.cart_item_number');
const accept_cookie = document.querySelectorAll('.accept_cookie');
const cookie_box = document.querySelector('.cookie_box');
const cart_icon = document.querySelectorAll('.cart_icon');
const menu_btn = document.querySelectorAll('.btn_close');
const collapse_links = document.querySelectorAll('[data-link]');

collapse_links.forEach(el=>{
  el.addEventListener("click",()=>{
    const link = document.querySelector(`.menu_${el.dataset.link}`);
    link.classList.toggle("collapse_link")
  })
})

menu_btn.forEach(el=> el.addEventListener("click",()=> document.body.classList.toggle("over_hide")))

cart_icon.forEach(el=>{
  el.addEventListener("click",()=>{
    document.body.classList.toggle("overflow-hidden");
  })
})

// ? SWIPER JS INITIALIZATION
var mySwiper = new Swiper('.swiper_container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

if(localStorage.getItem("cookie") != "done"){
  accept_cookie.forEach(el=> el.addEventListener("click",(e)=>{
    e.preventDefault();
    cookie_box.classList.add("d-none");
    localStorage.setItem("cookie","done");
  }))
} else{
  cookie_box.classList.add("d-none");
}
const slidesPerView = innerWidth > 992 ? 5 : innerWidth > 768 ? 4 : innerWidth > 576 ? 3 : innerWidth < 576 ? 2 : 2;
new Swiper('.insta_slider', {
  // Optional parameters
  loop: true,
  slidesPerView,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
new Swiper('.brand_container', {
  // Optional parameters
  loop: true,
  slidesPerView,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.next_arrow',
    prevEl: '.prev_arrow',
  }
})


you_may_like_image_selector.forEach(el=>{
  el.addEventListener("click",()=>{
    you_may_like_image_selector.forEach(el=> el.classList.remove("active"));
    const img = el.querySelector("img");
    you_may_like_main_img.src = img.src;
    el.classList.add("active");
  })
})

product_buttons.forEach(el=>{
  el.addEventListener("click",()=>{
    [product_buttons,product_container].forEach(nodeList=> nodeList.forEach(el=> el.classList.remove("active")));
    document.querySelector(el.dataset.target).classList.add("active");
    el.classList.add("active");
  });
});

[cart_item_number.querySelector(".plus"),cart_item_number.querySelector(".minus")].forEach(el=>{
  const num = cart_item_number.querySelector(".value");
  el.addEventListener('click',()=>{
    if(+num.textContent >= 1 || el.dataset.sign != "-"){
      num.textContent = eval(`${num.textContent+el.dataset.sign + "1"}`);
    }
  });
})