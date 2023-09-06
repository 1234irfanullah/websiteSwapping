// javascript code for running image slider


// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
      
//     },


//     grabCursor:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides:true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },


  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});