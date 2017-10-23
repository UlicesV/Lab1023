class Mover{//cyan ball
  constructor(loc,vel, acc, rad, clr){
    this.loc= loc;
    this.vel= vel;
    this.acc= acc;
    this.radius =rad;
    this.clr=clr;
  }
  update(){
    this.vel.limit(1.50);
    this.loc.add(this.vel);
    // check edges
    if ((this.loc.x > window.innerWidth) || (this.loc.x < 0)) {
      this.vel.x = this.vel.x * -1;
    }
    if ((this.loc.y > window.innerHeight) || (this.loc.y < 0)) {
      this.vel.y = this.vel.y * -1;
    }
    this.render();
  }

  render(){
    ctx.fillStyle =  'black';
    ctx.strokeStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();

  }

}
