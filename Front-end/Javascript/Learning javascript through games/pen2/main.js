"use strict";

function Pen(color,length){
  this.color = color;
  this.length = length;
  this.draw = function(){
    this.length -= 0.01;
  }
}

var penR = new Pen("red",5);
var penG = new Pen("green",15);
var penB = new Pen("blue",7);

var pen = penR;

function stroke(){
  pen.draw();
  document.getElementById("color").textContent = pen.color;
  document.getElementById("length").textContent = pen.length;
}

function pickR(){ pen = penR;}
function pickG(){ pen = penG;}
function pickB(){ pen = penB;}

