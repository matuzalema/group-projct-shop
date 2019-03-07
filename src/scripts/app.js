(function () {
  var showMenuBtn = document.querySelector('.menu-list-display');
  var menuList = document.getElementById('dropdown-menu');

  showMenuBtn.addEventListener('click', function () {
    menuList.classList.toggle('dropdown');
    showMenuBtn.classList.toggle('active');
  });
})();
