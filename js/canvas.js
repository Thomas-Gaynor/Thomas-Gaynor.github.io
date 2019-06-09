
var canvas = document.querySelector("canvas");
var c;
var circleArray = new Array;
var pointArray = new Array;

var size = {

  x: 1460,
  y: 800

}



function init(){

  canvas.width = size.x;
  canvas.height = size.y;
  c = canvas.getContext('2d');
  circleArray = [];

}

var backgroundColour = "#404040"
var colours = ["#FF355E","#FD5B78","#FF6037", "#FFFF66"];

// --- Circle Area --- //

function Circle(x, y, dx, dy, radius){

  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.colour = colours[getRandomInt(0, colours.length)];

}

Circle.prototype.draw = function() {

  c.strokeStyle = this.colour;
  c.fillStyle = this.colour;
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();
}

Circle.prototype.update = function() {

  this.x += this.dx;
  this.y += this.dy;
  this.radius -= 0.5;

}

// --- Circle Area End --- //

function getRandomInt(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}

function getRandomArb(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive

}

canvas.onmousemove = function(e){


  circleArray.push(new Circle(e.layerX * (canvas.width / canvas.clientWidth), e.layerY * (canvas.height / canvas.clientHeight), getRandomArb(-3,3), getRandomArb(-3,3), 40));


}

function animate(){

  c.beginPath();
  c.globalAlpha = 1;
  c.fillStyle = backgroundColour;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.stroke();

  c.globalAlpha = 0.9;
  for(var i = circleArray.length - 1; i >= 0; i--){
    circleArray[i].draw();
  }

  for(var i = circleArray.length - 1; i >= 0; i--){
    circleArray[i].update();
  }

  var j = 0;
  while(j < circleArray.length){
    if(circleArray[j].radius > 0){
      j++;
    }else{
      circleArray.splice(j, 1);
    }
  }


  requestAnimationFrame(animate);
}

init();
animate();
