const all = (ele) => document.querySelectorAll(ele);
const one = (ele) => document.querySelector(ele);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let pos = 0;

const slide = (_) => {
  const wrap = one(".slide"); //slide 선택
  const target = wrap.children[0]; // ul 선택
  const len = target.children.length; //li의 갯수

  target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s;`;
  Array.from(target.children).forEach(
    (ele) => (ele.style.cssText = `width:calc(100% / ${len});`)
  );

  setInterval(() => {
    pos = (pos + 1) % len;
    target.style.marginLeft = `${-pos * 100}%`;
  }, 2000);
};

prevEvent = () => {
  const selectSlide = document.querySelector(".slide_ul");

  selectSlide.style.marginLeft += `100%`;

  console.log("click~");
};

prev.addEventListener("click", prevEvent);
//next.addEventListener("click", nextEvent);
window.onload = function () {
  slide();
};
