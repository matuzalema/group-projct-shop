(function() {
  'use strict';

  // Change active button favorite & add to compare on click
  const btnFavorite = document.querySelectorAll('.btn-outline');

  btnFavorite.forEach(element => {
    element.addEventListener('click', function (event) {
      this.classList.toggle('active');
      event.preventDefault();
    });
  });

  // Add dots to menu as carousel nav
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
    } else if (vPortWidth >= 572) {
      pages = sliderItems.length / 2;
    } else if (vPortWidth <= 567) {
      pages = sliderItems.length;
    }

    for (let i = 0; i < pages; i++) {
      carouselDots.insertAdjacentHTML('afterbegin', '<li><a></a></li>');
    }
  }
  ChangeDotsNumber();
  // Change number when resized
  window.addEventListener('resize', function () {
    ChangeDotsNumber();
  });
})();

// MENU-BAR dropdown for small devices
(function () {
  var showMenuBtn = document.querySelector('.menu-list-display');
  var menuList = document.getElementById('dropdown-menu');

  showMenuBtn.addEventListener('click', function () {
    menuList.classList.toggle('dropdown');
    showMenuBtn.classList.toggle('active');
  });
})();
