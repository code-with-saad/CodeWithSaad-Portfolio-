var loader = document.getElementById("preloader");

window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);
    setTimeout(function () {
      loader.style.display = "none";
    }, 900);
  },
  false
);


let type = new Typed(".auto-typed", {
  strings: ["Hybrid App Developer", "Frontend Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  smartBackspace: true
 });



 const lenis = new Lenis({
  duration: 1.5,
 })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



AOS.init();



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}