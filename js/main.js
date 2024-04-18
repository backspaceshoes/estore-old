/*=============== SWIPER SNEAKERS ===============*/

let swiperImages = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let swiperTitles = new Swiper('.home__titles', {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centredSlides: true,

});

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
	const header = document.getElementById('header')
	this.scriollY >= 50 ? header.classList.add('bg-header')
	                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)