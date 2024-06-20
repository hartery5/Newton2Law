class rope {
    constructor(x1,y1,x2,y2,axis){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.axis = axis; // x = true
    }

    update(cart){
        if (this.axis){
            this.x1 = cart.x;
        } else {
            this.y2 = cart.y;
        }
    }

    show(){
        push();
        strokeWeight(3);
        stroke(200)
        line(this.x1,this.y1,this.x2,this.y2);
        pop();
    }
}