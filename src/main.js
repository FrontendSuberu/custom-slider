const slider = document.querySelector("[data-slider]");
const counter = document.querySelector(".range-counter");
const sliderProgressBar = document.querySelector("[data-progress-bar]");

document.addEventListener("DOMContentLoaded", () => {
  slider.addEventListener("input", (event) => {
    let sliderprogress = event.target.value;

    counter.textContent = `${sliderprogress}%`;

    // seeting the min width to 15% to match the slider thumb
    let approxProgress = Math.min(Math.max(sliderprogress, 15), 100);
    // console.log(approxProgress);
    sliderProgressBar.style.width = `${approxProgress}%`;
  });
});
