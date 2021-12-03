document.addEventListener("DOMContentLoaded", function () {
  var menus = document.querySelectorAll(".navigation__toggle");
  var body = document.querySelector("body");

  menus.forEach(function (menu) {
    menu.addEventListener("click", function () {
      body.classList.toggle("nav-open");
    });
  });
});
