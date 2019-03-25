import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';
// calling function ChangeDotsNumber
ChangeDotsNumber();

// Slider section-promotion left
tns({
  container: '.slider-promo-left',
  navContainer: '.dots-deals',
  items: 1,
  controls: false,
  nav: true,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  loop: true,
  autoplay: true,
  rewind: false,
  speed: 1500,
  autoplayTimeout: 4000,
  autoplayButtonOutput: false,
  autoplayHoverPause: true
});

// Slider section-promotion right
tns({
  container: '.slider-promo-right',
  controlsContainer: '.promotion-btns',
  items: 1,
  controls: true,
  nav: false,
  slideBy: 'page',
  mouseDrag: false,
  touch: true,
  rewind: false,
  speed: 1500,
  swipeAngle: false,
  loop: true,
  autoplay: false
});

// Slider section-brands
tns({
  container: '.brands-slider',
  prevButton: '.left',
  nextButton: '.right',
  items: 2,
  responsive: {
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    }
  },
  controls: true,
  nav: false,
  slideBy: 'page',
  mouseDrag: true,
  touch: true,
  swipeAngle: false,
  loop: true,
  autoplay: true,
  rewind: false,
  speed: 4000,
  autoplayTimeout: 8000,
  autoplayButtonOutput: false
});


// slider feedback

tns({
  container: '.my-slider2',
  navContainer: '.carousel-dots2',
  items: 1,
  controls: false,
  nav: true,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  loop: true
});

// Slider section-products, add dots to menu as carousel nav
function ChangeDotsNumber () {
  let pages;
  let carouselDots = document.querySelector('.carousel-dots');
  let sliderItems = document.querySelectorAll('.slider-item');
  let vPortWidth = document.body.clientWidth;
  // Reset number
  carouselDots.innerHTML = '';
  // Numbers of dots RWD
  if (vPortWidth >= 992) {
    pages = sliderItems.length / 3;
  } else if (vPortWidth >= 576) {
    pages = sliderItems.length / 2;
  } else if (vPortWidth <= 575) {
    pages = sliderItems.length;
  }

  for (let i = 0; i < pages; i++) {
    carouselDots.insertAdjacentHTML('afterbegin', '<li><a></a></li>');
  }
  // Slider section-products options
  tns({
    container: '.my-slider',
    navContainer: '.carousel-dots',
    items: 1,
    gutter: 0,
    responsive: {
      576: {
        gutter: 5,
        items: 2
      },
      992: {
        gutter: 15,
        items: 3
      }
    },
    controls: false,
    speed: 2000,
    nav: true,
    slideBy: 'page',
    mouseDrag: false,
    touch: true,
    swipeAngle: false,
    loop: true
  });
}

