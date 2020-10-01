// ! PRODUCT BUTTONS
const product_buttons = document.querySelectorAll(".products_buttons_wrapper button")
const product_container = document.querySelectorAll(".products_wrapper")
const you_may_like_image_selector = document.querySelectorAll('.image_wrapper');
const you_may_like_main_img = document.querySelector('.main_img');
const cart_item_number = document.querySelector('.cart_item_number');

// ? SWIPER JS INITIALIZATION
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
      num.textContent = eval(`${num.textContent+el.dataset.sign + "1"}`)
    }
  });
})