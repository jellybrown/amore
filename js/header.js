(() => {
  const menus = document.querySelector(".menus");
  const header = document.querySelectorAll(".header_menu");
  const draw = document.querySelectorAll(".draw_menu");
  const nav = document.querySelector(".nav");
  const headerArea = document.querySelector("header");
  const allMenu = document.querySelector(".all")
  const innerNav = nav.querySelector("nav");
  const bar = document.querySelector(".bar");
  const close = document.querySelector(".close");
  const black = document.querySelector(".black_bg");

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

  // 스크롤시 상단 메뉴바 고정
  window.addEventListener("scroll", function () {
    if (this.pageYOffset > 50) {
      headerArea.classList.add("down")
    } else {
      headerArea.classList.remove("down")
    }
  })

  //bar 기본으로 투명도 1
  bar.style.opacity = '100%';

  //메뉴를 클릭하면 (tablet 버전)
  allMenu.addEventListener("click", function (e) {
    e.preventDefault();
    innerNav.classList.toggle("active");
    if (innerNav.classList.contains("active")) {
      bar.style.opacity = 0;
      close.style.opacity = "100%";
      close.style.color = "black";
      black.style.visibility = "visible";

    } else {
      close.style.opacity = 0;
      bar.style.opacity = "100%";
      black.style.visibility = "hidden";
    }

  })





})();