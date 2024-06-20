class pulley {
    constructor(x,y,r,dir=1){
      this.theta = 0.0;
      this.r = createVector(x,y);
      this.radius = r;
      this.dir = dir;
    }
    
    update(dt){
      this.theta += dt
    }
    
    show(){
      push();
      ellipseMode(CENTER);
      translate(this.r.x,this.r.y);
      rotate(-this.dir*this.theta);
      strokeWeight(3);
      stroke(100);
      fill(225,225,225);
     
      circle(0,0,this.radius);
      fill(0)
      noStroke();
      circle(0,0,this.radius/10);
      fill(255);
      circle(-0.2*this.radius,-0.2*this.radius,0.2*this.radius);
      circle(-0.2*this.radius,0.2*this.radius,0.2*this.radius);
      circle(0.2*this.radius,-0.2*this.radius,0.2*this.radius);
      circle(0.2*this.radius,0.2*this.radius,0.2*this.radius);
      pop();
    }
  }