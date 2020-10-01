// ! PRODUCT BUTTONS
const product_buttons = document.querySelectorAll(".products_buttons_wrapper button")
const product_container = document.querySelectorAll(".products_wrapper")


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



product_buttons.forEach(el=>{
  el.addEventListener("click",()=>{
    [product_buttons,product_container].forEach(nodeList=> nodeList.forEach(el=> el.classList.remove("active")))
    document.querySelector(el.dataset.target).classList.add("active")
    el.classList.add("active")
  })
})