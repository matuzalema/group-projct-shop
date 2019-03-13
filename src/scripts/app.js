(function () {
  'use strict';

  // Change active button favorite & add to compare on click
  const btnFavorite = document.querySelectorAll('.btn-outline');

  btnFavorite.forEach(element => {
    element.addEventListener('click', function (event) {
      this.classList.toggle('active');
      event.preventDefault();
    });
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
