<<<<<<< HEAD
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

=======
>>>>>>> Add carousel -tiny-slider to new furniture
let slider = tns({
  container: '.my-slider',
  navContainer: '.carousel-dots',
  items: 1,
  controls: false,
  nav: true,
  responsive: {
<<<<<<< HEAD
    576: {
=======
    572: {
>>>>>>> Add carousel -tiny-slider to new furniture
      items: 2,
      gutter: 5
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

// Slider rebuild when window resize
<<<<<<< HEAD
window.addEventListener('resize', function () {
=======
window.addEventListener('resize', function() {
>>>>>>> Add carousel -tiny-slider to new furniture
  slider.rebuild();
});
