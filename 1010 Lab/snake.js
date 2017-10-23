// function snake(){
//   this.x = [],
//   this.y = [],
//   this.segNum = 20,
//   this.segLength = 18;
//   //loading x and y with 0
//   for (var i = 0; i < segNum; i++) {
//     this.x[i] = 0;
//     this.y[i] = 0;
//   }
//
//   this.animateSnake = function() {
//     this.dragSegment(0,movers[0].loc.x,movers[0].loc.y);
//     for( var i=0; i<x.length-1; i++) {
//       this.dragSegment(i+1, x[i], y[i]);
//     }
//   }
//
// this.dragSegment=function(i, xin, yin) {
//     var dx = xin - x[i];
//     var dy = yin - y[i];
//     var angle = Math.atan2(dy, dx);
//     x[i] = xin - Math.cos(angle) * segLength;
//     y[i] = yin - Math.sin(angle) * segLength;
//     this.segment(x[i], y[i], angle);
//   }
//
// this.segment=function(x, y, a) {
//     ctx.save();
//     ctx.translate(x, y);
//     ctx.rotate(a);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(segLength, 0);
//     ctx.restore();
//   }
// this.draw=function(){
//   var loc= JSVector.addGetNew(this.loc,movers[0].loc);
//   ctx.fillStyle =  'black';
//   ctx.strokeStyle = 'cyan';
//   ctx.beginPath();
//   ctx.arc(loc.x,loc.y, this.radius, Math.PI*2, 0, false);
//   ctx.stroke();
//   ctx.fill();
// }
// }
