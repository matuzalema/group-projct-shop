(function () {
    "use strict";
  
    //Change active button favorite & add to compare on click
    const btnFavorite = document.querySelectorAll(".btn-outline");
  
    btnFavorite.forEach(element => {
      element.addEventListener("click",
        function (event) {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
          } else {
            this.className += " active";
          }
          event.preventDefault();
        })
    });
  
  })();