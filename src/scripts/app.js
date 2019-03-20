(function () {
  'use strict';

  let elements = document.querySelectorAll('.dot2');
  let tabs2 = document.querySelectorAll('.tabs2');
  let data = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (e) {
      e.preventDefault();

      elements.forEach(function (node) {
        node.classList.remove('active');
      });

      e.currentTarget.classList.add('active');

      data = this.dataset.anchor;

      for (let j = 0; j < tabs2.length; j++) {
        tabs2[j].classList.remove('active');
        setTimeout(function () {
          tabs2[j].style.display = 'none';
        }, 750);
        if (tabs2[j].classList.contains(data)) {
          setTimeout(function () {
            tabs2[j].style.display = 'flex';
          }, 750);
          tabs2[j].classList.add('active');
        }
      }
    });
  }

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

  // MENU-BAR dropdown for small devices
  var showMenuBtn = document.querySelector('.menu-list-display');
  var menuList = document.getElementById('dropdown-menu');

  showMenuBtn.addEventListener('click', function () {
    menuList.classList.toggle('dropdown');
    showMenuBtn.classList.toggle('active');
  });
})();
