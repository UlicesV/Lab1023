function JSVector (x, y) {
  this.x = x;
  this.y = y;
}



JSVector.subGetNew = function(vec1, vec2){
  var dx = vec1.x - vec2.x;
  var dy = vec1.y - vec2.y;

  return (new JSVector(dx, dy));
}

JSVector.addGetNew = function(vec1,vec2){
  var dx = vec1.x + vec2.x;
  var dy = vec1.y + vec2.y;
  return(new JSVector(dx,dy));
}


JSVector.prototype.normalize = function () {
  var mag = this.getMag();
  this.x  = this.x/mag;
  this.y  = this.y/mag;
}

JSVector.prototype.getMag = function () {
  return Math.sqrt(this.x*this.x + this.y*this.y);
}


JSVector.prototype.getDirection = function () {
  return Math.atan2(this.x, this.y);
}
JSVector.prototype.setDirection = function(angle){
      var m = this.getMag();
      this.x = m* Math.cos(angle);
      this.y = m* Math.sin(angle);
    }


JSVector.prototype.setMag = function (magnitude) {
  if(magnitude){
    var direction = this.getDirection();
    this.x = Math.cos(direction)*magnitude;
    this.y = Math.sin(direction)*magnitude;
  }else{
    var direction = this.getDirection();
    this.x = 0;
    this.y = 0;
  }
}

JSVector.prototype.mult = function (n) {
  this.x *= n;
  this.y *= n;

}

JSVector.prototype.add = function (vec) {
  this.x += vec.x;
  this.y += vec.y;

}

JSVector.prototype.limit = function (lim) {

  if(lim){
    if(this.getMag() > lim){
      this.setMag(lim);
    }
  }
}

JSVector.prototype.dist = function (vec) {
   var dx = this.x - vec.x;
   var dy = this.y - vec.y;
   return Math.sqrt(dx*dx + dy*dy);
}
