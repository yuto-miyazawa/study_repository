Array.prototype.shuffle = function(){
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random() * i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

function shuffle(){
  var card = [1,1,2,2,3,3,4,4,5,5,6,6];
  card.shuffle();
  document.getElementById('result').innerText = card.join(",");
}