class barrier {
    constructor(x,y,w,top){
      this.x=x;
      this.y=y;
      this.w=w;
      this.h = 20;
      this.top=top;
    }
    
    show(){
      push();

  
      strokeWeight(2);
      stroke(150);
      line(this.x,this.y+this.h-10,this.x+10,this.y+this.h);
      line(this.x+this.w-10,this.y+this.h-20,this.x+this.w,this.y+this.h-10);
      for (let i = this.x; i < this.x+this.w-10; i+=10){
        line(i,this.y,i+20,this.y+this.h);
      }

      strokeWeight(5);
      stroke(0);
  
      if (this.top){
        line(this.x,this.y+1,this.x+this.w,this.y+1);
      } else {
        line(this.x,this.y+this.h-1,this.x+this.w,this.y+this.h-1);
      }
      pop();
    }
  }