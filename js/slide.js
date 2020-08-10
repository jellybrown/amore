(() => {
  const slideWrapper = document.querySelector(".slide");
  const slideContainer = document.querySelector(".slide_ul");
  const slides = document.querySelectorAll(".img_slide");
  const slideCount = slides.length;
  let currentIndex = 0;
  let topHeight = 0;
  const navPrev = document.querySelector("#prev");
  const navNext = document.querySelector("#next");
  const controllBar = document.querySelectorAll(".controller_bar li");
  let timer;

  // 슬라이드의 높이 확인하여 부모의 높이로 지정하기
  function calculateTallestSlide() {
    for (let i = 0; i < slideCount; i++) {
      if (slides[i].offsetHeight > topHeight) {
        topHeight = slides[i].offsetHeight;
      }
    }

    slideWrapper.style.height = `${topHeight}px`;
    slideContainer.style.height = `${topHeight}px`;
  }

  // 슬라이드가 있으면 가로로 배열하기
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = `${i * 100}%`;
  }

  // 슬라이드 이동 함수

  function goToSlide(idx) {
    slideContainer.style.left = idx * -100 + "%";
    slideContainer.classList.add("animated");

    currentIndex = idx;

    for (let i = 0; i < slideCount; i++) {
      controllBar[i].classList.remove("on");
    }
    controllBar[currentIndex].classList.add("on");

    //updateNav();
  }

  goToSlide(0);

  //컨트롤바 이벤트
  for (let i = 0; i < slideCount; i++) {
    controllBar[i].addEventListener("click", function () {
      goToSlide(i);
    });
  }

  //버튼을 클릭하면 슬라이드 이동시키기
  navPrev.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(slideCount - 1);
    }
  });

  navNext.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIndex < slideCount - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  });

  //무한반복

  function startSlide() {
    timer = setInterval(function () {
      let nextSlide = (currentIndex + 1) % slideCount;
      goToSlide(nextSlide);
    }, 3000);
  }

  function stopSlide() {
    clearInterval(timer);
  }

  slideWrapper.addEventListener("mouseenter", function () {
    stopSlide();
  });
  slideWrapper.addEventListener("mouseleave", function () {
    startSlide();
  });

  calculateTallestSlide();
  startSlide();
})();
