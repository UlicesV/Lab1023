class snake {
  constructor(mover) {
    this.mover=mover;
    this.amp = 100;
    this.loc= new JSVector(this.amp,0);
    this.radius=20;
    this.aVel=100000000;
    this.clr="red";
    this.angle=200;
  }
  update(){//changing location
    this.amp += 2;
    if(this.amp > .01) this.amp = .01;
    this.loc= new JSVector(this.amp+this.radius*5,0);
    this.angle=this.angle+this.aVel;
    this.loc.setDirection(this.angle);
    this.render();
  }
  render(){
    var loc= JSVector.addGetNew(this.loc,movers[0].loc);
    var loc2= JSVector.addGetNew(this.loc,movers[1].loc);
    ctx.fillStyle =  'red';
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.rect(loc.x,loc.y, this.radius,15, .1, false)
    ctx.arc(loc2.x,loc2.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
  }
}
