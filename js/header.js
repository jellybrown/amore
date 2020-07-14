const menus = document.querySelector(".menus");
const header = document.querySelectorAll(".header_menu");
const draw = document.querySelectorAll(".draw_menu");
const nav = document.querySelector(".nav");

function over(e) {
  //header에 마우스 오버시 드롭다운메뉴
  for (let i = 0; i < header.length; i++) {
    if (e.target.classList.contains("header_menu")) {
      if (header[i].classList.contains("on")) {
        header[i].classList.remove("on");
      } else {
        e.target.classList.add("on");
      }

      e.target.classList.add("on");
    }
    draw[i].addEventListener("mouseleave", out);
  }
}

function out() {
  for (let j = 0; j < header.length; j++) {
    if (header[j].classList.contains("on")) {
      header[j].classList.remove("on");
    }
  }
}
menus.addEventListener("mousemove", over);
