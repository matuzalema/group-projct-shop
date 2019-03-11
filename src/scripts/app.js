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
