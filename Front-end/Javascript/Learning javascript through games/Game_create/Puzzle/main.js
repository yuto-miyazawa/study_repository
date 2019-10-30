"use strict"; // 1

// 広域変数
var tiles = [];

// 初期化
function init(){ // 2
  var tr = document.getElementById("table");  // 3

  for (var i = 0; i<4 ;i++ ){   // 4
    var tr = document.createElement("tr");  // 5
    
    for (var j = 0;j<4; j++ ){   // 6
      var td =document.createElement("td");   // 7
      var index = i * 4 + j;
      td.className = "tile";
      td.index = index;
      td.value = index;
      td.textContent = index == 0 ? "":index;
      td.onclick = click;
      tr.appendChild(td);   // 8
      tiles.push(td);
    }
    table.appendChild(tr);
  }

  for (var i = 0; i < 1000; i++){
    click({ srcElement: {index: Math.floor(Math.random() * 16)}})
  }
}

function click(e){   // 9
  var i = e.srcElement.index;   // 10

  if (i-4 >= 0 && tiles[i - 4].value == 0){   // 11s
    swap(i,i-4);
  } else if (i+4 < 16 && tiles[i+4].value == 0){
    swap(i,i+4);
  } else if (i % 4 != 0 && tiles[i - 1].value == 0){
    swap(i,i - 1);
  } else if (i % 4 !=3 && tiles[i + 1].value == 0){
    swap(i,i+1);
  }   // 11e
}

function swap(i,j){
  var tmp = tiles[i].value;
  tiles[i].textContent = tiles[j].textContent;
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = tmp;
  tiles[j].value = tmp;
}