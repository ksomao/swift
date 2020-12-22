import './sass/style.scss'
import './js/gsap/barba.gsap.js'


document.addEventListener("DOMContentLoaded", function (event) {
  let links = document.querySelectorAll("#wpadminbar a");
  let admin = document.getElementById("wpadminbar");
  admin.setAttribute("data-barba-prevent", "all");
  for (const link of links) {
    link.classList.add('no-barba')
  }
});



