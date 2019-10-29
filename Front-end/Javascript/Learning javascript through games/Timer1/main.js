
var timerld = NaN;
var count = 0;

function startTimer(){
  clearInterval(timerld);
  timerld = setInterval(tick,1000);
}

function stopTimer(){
  clearInterval(timerld);
}


function tick(){
  count++;
  document.getElementById("counter").textContent=count;
}