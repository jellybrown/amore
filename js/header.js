const header = document.querySelector(".header_menu");
const draw = document.querySelector(".draw_menu");
function over() {
  draw.classList.add("on");
  console.log("실행");
}

header.addEventListener("mouseover", over);
