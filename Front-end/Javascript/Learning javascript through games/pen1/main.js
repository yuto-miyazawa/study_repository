
var pen = {
  color:"red",
  length:5,
  draw:function(d){
    this.length -= 0.01 * d;
  }
}

function stroke(){
  pen.draw(2);
  document.getElementById("length").textContent = pen.length;
}