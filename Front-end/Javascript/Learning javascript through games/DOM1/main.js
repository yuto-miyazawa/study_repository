var colors = ["red","blue","green","yellow","black","purple"];
var index = 0;

function insert(){
  var parent = document.getElementById("mylist");
  var item = document.createElement("p");
  item.textContent = colors[index];
  item.style.color = colors[index];
  index = ++index % colors.length;
  parent.appendChild(item);
  console.log(index)
}
