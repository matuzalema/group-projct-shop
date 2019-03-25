(function () {
  'use strict';

  let starContainer = document.querySelectorAll('.stars');

  starContainer.forEach(function (item) {
    const stars = item.querySelectorAll('a[title^="Rate"]');
    stars.forEach(function (el) {
      el.addEventListener('click', rating);
      el.addEventListener('mouseover', hoverEffect);
      el.addEventListener('mouseout', hoverEffect);
    });

    function rating (event) {
      event.preventDefault();
      const choice = event.target;
      let active = false;
      stars.forEach(function (star) {
        if (active) {
          star.classList.remove('active');
          star.classList.remove('full');
        } else if (!active) {
          star.classList.add('active');
        }
        if (star === choice) {
          active = true;
        }
      });
    }

    function hoverEffect (event) {
      const choice = event.target;
      let active = false;
      stars.forEach(function (star) {
        if (!active) {
          star.classList.toggle('hoverEffect');
        }
        if (star === choice) {
          active = !active;
        }
      });
    }
  });

  // Change active button favorite & add to compare on click
  const btnFavorite = document.querySelectorAll('.btn-outline');

  btnFavorite.forEach(element => {
    element.addEventListener('click', function (event) {
      this.classList.toggle('active');
      event.preventDefault();
    });
  });
  // MENU-BAR dropdown for small devices
  var showMenuBtn = document.querySelector('.menu-list-display');
  var menuList = document.getElementById('dropdown-menu');

  showMenuBtn.addEventListener('click', function () {
    menuList.classList.toggle('dropdown');
    showMenuBtn.classList.toggle('active');
  });
  // Change number when resized
  window.addEventListener('resize', function () {
    window.location.reload(true);
  });
})();
