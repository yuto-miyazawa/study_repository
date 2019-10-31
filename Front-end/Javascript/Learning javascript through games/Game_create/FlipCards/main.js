"use strict"
// 配列シャッフル

Array.prototype.shuffle = function(){    // 4
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random()* i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

// 広域変数
var timer = NaN;
var score = 0;
var flipTimer;
var prevCard;
var startTime;

// var timer = NaN,score = 0,flipTimer,prevCard,startTime;


// 初期化関数
function init(){  // 5
  var table = document.getElementById("table");

  var cards = [];      // 6s
  for (var i=1; i <=10; i++ ){
    cards.push(i);
    cards.push(i);
    }

    cards.shuffle();    // 6e

    for (var i=0; i < 4; i++){   // 7
      var tr = document.createElement("tr");
      for (var j=0; j < 5; j++){
        var td = document.createElement("td");
        td.className = "card back";
        td.number = cards[i * 5 + j];
        td.onclick = flip;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    startTime = new Date();
    timer = setInterval(tick,1000);
}

// 経過時間観測用タイマー
function tick() {   // 8
  var now = new Date;
  var elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
  document.getElementById("time").textContent = elapsed;
}


// カード裏返し
// 9s
function flip(e) {    // 10
  var src = e.srcElement;
  if (flipTimer || src.textContent !=""){
    return;
  }


var num = src.number;  // 11
src.className = "card";
src.textContent = num;

// 1枚目    12
if (prevCard == null) {
  prevCard = src;
  return;
}

// 2枚目    13
if (prevCard.number == num) {
  if (++score == 10){
    clearInterval(timer);
  }
  prevCard = null;
  clearTimeout(flipTimer);
} else{
  flipTimer = setTimeout(function (){    // 14
    src.className = "card back";
    src.textContent = "";
    prevCard.className = "card back";
    prevCard.textContent = "";
    prevCard = null;
    flipTimer = NaN;
  }, 1000);
 }
}
// 9e