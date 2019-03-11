let slider = tns({
  container: '.my-slider',
  navContainer: '.carousel-dots',
  items: 1,
  controls: false,
  nav: true,
  responsive: {
    576: {
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
window.addEventListener('resize', function() {
  slider.rebuild();
});
