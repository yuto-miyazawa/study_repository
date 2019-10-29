var car = {
  speed:0,
  gasolin:100,

  driveup:function(){
    this.speed += 1;
    this.gasolin -= 0.1;
  },

  drivedown:function(){
    this.speed -= 1;
    this.gasolin -= 0.1;
  },

  s_driveup:function(){
    this.speed += 10;
    this.gasolin -= 1;
  },

  s_drivedown:function(){
    this.speed -= 10;
    this.gasolin -= 0.1;
  }
}

function accelerate(){
  car.driveup();
  document.getElementById("speed").textContent = car.speed;
  document.getElementById("gasolin").textContent = car.gasolin;
}

function decelerate(){
  car.drivedown();
  document.getElementById("speed").textContent = car.speed;
  document.getElementById("gasolin").textContent = car.gasolin;
}

function s_accelerate(){
  car.s_driveup();
  document.getElementById("speed").textContent = car.speed;
  document.getElementById("gasolin").textContent = car.gasolin;
}

function s_decelerate(){
  car.s_drivedown();
  document.getElementById("speed").textContent = car.speed;
  document.getElementById("gasolin").textContent = car.gasolin;
}


