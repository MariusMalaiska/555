const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const logo = intro.querySelector(".logo");
const section = document.querySelector("section");

const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
  duration: 2300,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);


let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

// -----------------------------------------------

setHeight = document.getElementById("set-height")

function scrollPlay() {
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);