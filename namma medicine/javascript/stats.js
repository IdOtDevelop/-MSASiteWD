
let valueDisplays = document.querySelectorAll(".num");
let interval=1000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration=Math.floor(interval/endValue);
  let skip=0;
  if(endValue<500) skip=1;
  else skip=10;
  let counter=setInterval(function()
  {
    if(parseInt(valueDisplay)<500) startValue+=1;
    else startValue+=skip;
    valueDisplay.textContent=startValue+"+";
    if(startValue>=endValue) {
      clearInterval(counter);
    }
  }, duration);

});

