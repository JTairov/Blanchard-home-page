const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  autoplay: {
    delay: 3000,
  }
});

const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 2,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 34,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },    

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    
  }
})

const eventSwiper =  new Swiper('.events-swiper', {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 34,
  
  navigation: {
    prevEl: '.events-btn-prev',
    nextEl: '.events-btn-next'
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },    

  pagination: {
    el: '.events-swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1020: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }

})

const partnersSwiper =  new Swiper('.partners-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,

  navigation: {
    prevEl: '.partners-btn-prev',
    nextEl: '.partners-btn-next',
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
  }
}) 