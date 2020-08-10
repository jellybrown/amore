(() => {
  const menus = document.querySelector(".menus");
  const header = document.querySelectorAll(".header_menu");
  const draw = document.querySelectorAll(".draw_menu");
  const nav = document.querySelector(".nav");


  function overEvent(e) {
    for (let i = 0; i < header.length; i++) {
      header[i].classList.remove("on");
    }
    e.target.classList.add("on");
  }

  function outEvent() {
    for (let i = 0; i < header.length; i++) {
      header[i].classList.remove("on");
    }
  }

  for (let i = 0; i < header.length; i++) {
    header[i].addEventListener("mouseenter", overEvent);
    draw[i].addEventListener("mouseleave", outEvent);

  }
})();