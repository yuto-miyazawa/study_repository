
function init(){
  var b = document.getElementById("board");

  for (var i=0; i<8; i++){
    var tr = document.createElement("tr");

    for(var j=0; j<8; j++){
      var td = document.createElement("td");

      td.className = "cell";
      td.id = "cell"+i+j;
      td.onclick = clicked;
      tr.appendChild(td);
    }
    b.appendChild(tr);
  }
}

function clicked(e){
  document.getElementById("info").textContent = e.target.id + "clicked";
  console.log(e.target.id);
}