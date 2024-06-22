class vector{
    constructor(x, y, m, theta, name){
      m+=10;
      this.r = createVector(x, y);
      this.v = createVector(m*cos(theta),m*sin(theta));
      this.vmag = this.v.mag();
      this.theta = theta;
      this.active = false;
      this.done = false;
      this.name = name;
    }
    
    show(){
      push();
      noStroke();
      textAlign(CENTER,CENTER);
      translate(this.r.x,this.r.y);

      rotate(this.theta);
      fill('#04AA6D');
      stroke('#04AA6D');
      strokeWeight(5);
      line(0,0,this.vmag-8,0);
      translate(this.vmag-8,0);
      triangle(0,5,8,0,0,-5);
      pop();

      push();
      noStroke();
      textAlign(CENTER,CENTER);
      translate(this.r.x,this.r.y);
      let nx = (this.vmag+15)*cos(this.theta);
      let ny = (this.vmag+15)*sin(this.theta);

      rectMode(CENTER);
      fill(255,255,255,230);
      rect(nx,ny,20,20);
      fill(0)

      textSize(20);
      text(this.name.substring(0,1),nx,ny);
      textSize(12)
      textAlign(LEFT);
      text(this.name.substring(1),nx+6,ny+6);
      textSize(20);
      stroke(0);
      strokeWeight(1);
      let py = ny - 0.5*textAscent();
      line(nx-4,py,nx+9,py);
      line(nx+5,py-3,nx+9,py);

      pop();
    }
    
}