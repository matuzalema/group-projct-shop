import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

let slider = tns({
  container: '.my-slider',
  navContainer: '.carousel-dots',
  items: 1,
  controls: false,
  nav: true,
  responsive: {
    576: {
      items: 2
    },
    992: {
      items: 3
    }
  },
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  loop: false
});

let promoLeft = tns({
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

let promoRight = tns({
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

let resizeTimeout;
window.addEventListener('resize', event => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    slider.rebuild();
    promoLeft.rebuild();
    promoRight.rebuild();
  }, 500);
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
