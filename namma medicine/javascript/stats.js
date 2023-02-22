<<<<<<< HEAD
// let valueDisplays = document.querySelectorAll(".num");
let interval = 100;
=======
let valueDisplays = document.querySelectorAll(".num");
let interval=200;
>>>>>>> 672d722021e1b57dac87ad1f41f1cd11bc10fe2e

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

