window.onload = init;
var canvas;
var ctx;
var movers = [];
var attr;
var frames;
var angle=3;
var aVelocity =1;
var aAcceleration = 0.001;
var Orbiter;

function init(){
  canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'red 50px';
  canvas.style.backgroundColor = 'black';
  ctx = canvas.getContext('2d');
  loadMovers(2);
  Orbiter =new orbiter(movers[0,1]);
    Snake = new snake(movers[0,1]);//new
  animate();

}

function loadMovers(numMovers){//cyan ball
  for (i = 0; i < numMovers; i++) {
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var loc = new JSVector(x, y);
    var dx = Math.random()*10 - 15;
    var dy = Math.random()*10 - 15;
    var vel = new JSVector(dx, dy);
    var ax = Math.random()*1 - .5;
    var ay = Math.random()*1 - .5;
    var acc = new JSVector(ax, ay);
    var clr = 'cyan';
    movers.push(new Mover(loc, vel, acc,45, clr))
  }
}


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  runMovers();
  movers[0,1].update();
  Orbiter.update();
  Snake.update();

function runMovers(){


   for (i = 0; i < movers.length; i++) {
      movers[i].update();
   }
}
}
