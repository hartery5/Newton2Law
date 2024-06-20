class plot {
    constructor(x,y,w,h,ylabel,xlabel,ymax,g){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ylabel = ylabel;
        this.xlabel = xlabel;
        this.ymax = ymax;
        this.g = g
    }

    show(){
        push();
        setLineDash([2, 2]);
        let gy = this.h/this.g;
        let gx = 9;
        let t = 0;

        textAlign(CENTER)
        textSize(10)
        textStyle(NORMAL)
        for (let x = this.x; x<=(this.x+this.w); x+=gx){
            stroke(225)
            strokeWeight(1)
            line(x,this.y,x,this.y+this.h);

            noStroke();
            if (abs(t-round(t,0))<0.1){
                text(nf(t,0,1),x,this.y+this.h+10);
                stroke(150)
                strokeWeight(1)
                line(x,this.y,x,this.y+this.h);
            }
            t+=0.25;
        }
        let yval = this.ymax;
        for (let y = this.y; y<=(this.y+this.h); y+=gy){
            stroke(100)
            strokeWeight(1)
            line(this.x,y,this.x+this.w,y);
            noStroke();
            text(nf(yval,0,1),this.x-10,y);
            yval -= this.ymax/this.g
        }
        pop();

        push();
        textAlign(CENTER,CENTER)
        textSize(12)
        textStyle(BOLD)
        text(this.xlabel,this.x+this.w/2,this.y+this.h+18);
        translate(this.x-30,this.y+this.h/2);
        rotate(-PI/2);
        text(this.ylabel,0,0);
        pop();

    }

    plot(data,ymax,color){
        push();
        strokeCap(SQUARE);
        strokeWeight(3);
        stroke(color);

        let px = 0;
        //let nx = 1.24;
        let nx = 0.6
        for (let i = 0; i<(data.length-1); i++){
            line(this.x+px,this.y+this.h-this.h*data[i]/ymax,this.x+px+nx,this.y+this.h-this.h*data[i+1]/ymax);
            px+=nx
        }
        pop();

        push();
        strokeWeight(2);
        line(this.x,this.y+this.h,this.x+this.w,this.y+this.h);
        translate(this.x+this.w-3,this.y+this.h);
        triangle(0,2,3,0,0,-2);
        pop();

        push();
        strokeWeight(2);
        line(this.x,this.y,this.x,this.y+this.h);
        translate(this.x,this.y+3);
        rotate(-PI/2);
        triangle(0,2,3,0,0,-2);
        pop();
    }
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}
