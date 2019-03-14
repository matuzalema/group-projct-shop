console.log('hello');

var starContainer = document.getElementById('stars');
var stars = Array.prototype.slice.call(starContainer.children);

starContainer.addEventListener('click', function (e) {
  e.preventDefault();

  stars.forEach(function (el) {
    return el.classList.remove('full');
  });
  e.target.classList.add('full');
});
