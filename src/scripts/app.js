console.log('hello');

document.addEventListener('DOMContentLoaded', function () {
  tabsy();
});

function tabsy () {
  let tabs = document.querySelectorAll('.tabs');
  let links = document.querySelectorAll('.panel-bar .menu ul li a');
  let data = '';
  //  let index = 0;
  let elements = document.querySelectorAll('.dot');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();

      links.forEach(function (node) {
        node.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      //
      data = this.dataset.anchor;
      var numbered = this.dataset.number;
      //       console.log(this.dataset.number);

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
        setTimeout(function () {
          tabs[j].style.display = 'none';
        }, 750);
        if (tabs[j].classList.contains(data)) {
          setTimeout(function () {
            tabs[j].style.display = 'flex';
          }, 750);
          tabs[j].classList.add('active');
        }
      }

      //       console.log(index);
      for (let g = 0; g < elements.length; g++) {
        elements[g].classList.remove('active');

        if (elements[g].dataset.number === numbered) {
          elements[g].classList.add('active');
        }
      }
    });
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (e) {
      e.preventDefault();

      elements.forEach(function (node) {
        node.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      data = this.dataset.anchor;

      var numbered = this.dataset.number;
      //       console.log(this.dataset.number);

      for (let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
        setTimeout(function () {
          tabs[j].style.display = 'none';
        }, 750);
        if (tabs[j].classList.contains(data)) {
          setTimeout(function () {
            tabs[j].style.display = 'flex';
          }, 750);
          tabs[j].classList.add('active');
        }
      }

      //       console.log(index);
      for (let g = 0; g < links.length; g++) {
        links[g].classList.remove('active');

        if (links[g].dataset.number === numbered) {
          links[g].classList.add('active');
        }
      }
    });
  }
}
