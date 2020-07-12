const menus = document.querySelector(".menus");
const header = document.querySelector(".header_menu");
const on = document.querySelector(".header_menu.on");
const li = document.querySelector(".on");
const draw = document.querySelectorAll(".draw_menu");

function over(e) {
  if (e.target.classList.contains("header_menu")) {
    console.log(e.target);

    e.target.classList.add("on");
  }
}

function out() {
  if (li.classList.contains("on")) {
    li.classList.remove("on");
  }
}

menus.addEventListener("mouseover", over);

li.addEventListener("mouseout", out);
