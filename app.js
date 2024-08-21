var loader = document.getElementById("preloader");

window.addEventListener(
  "load",
  function (load) {
    // loader.style.display = "none"
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