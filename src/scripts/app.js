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
