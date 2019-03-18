console.log('hello');

document.addEventListener('DOMContentLoaded', function () {
  tabsy2();
});

function tabsy2 () {
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
}
