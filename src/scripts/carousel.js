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

window.promoLeft = tns({
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
  autoplayTimeout: 3000,
  autoplayButtonOutput: false
});

window.promoRight = tns({
  container: '.slider-promo-right',
  controlsContainer: '.promotion-btns',
  items: 1,
  controls: true,
  nav: false,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  loop: true,
  autoplay: false
});

let resizeTimeout;
window.addEventListener('resize', event => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    slider.rebuild();
  }, 500);
});
