class cart {
    constructor(x,y,w,h,m,which){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.m = m;
        this.vx = 0;
        this.vy = 0;
        this.a = 0;
        this.which = which;
    }

    updateVectors(m1,m2,u){
        let a;
        let s1 = 4.5;
        if (m2>u*m1){
            a = 9.8*(m2-m1*u)/(m2+m1);


            if (this.which==1){
                this.up = m1*9.8/s1;
                this.down = m1*9.8/s1;
                this.right = m1*(a + u*9.8);
                this.left = u*m1*9.8;
            } else {
                this.up = m1*(a + u*9.8);
                this.down = m2*9.8;
                this.left = 0;
                this.right = 0;
            }
        } else {
            a = 0;
            if (this.which==1){
                this.up = m1*9.8/s1;
                this.down = m1*9.8/s1;
                this.right = m2*9.8;
                this.left = m2*9.8;
            } else {
                this.up = m2*9.8;
                this.down = m2*9.8;
                this.left = 0;
                this.right = 0;
            }
        }
        if (this.x==449 && this.which==1){
            this.right = m2*9.8;
            this.left = m2*9.8;
        }
        this.a = a
    }

    move(){
        if (this.which==1){
            this.vx += this.a*dt;
            this.x += this.vx*dt;
        } else if (this.which==2){
            this.vy += this.a*dt;
            this.y += this.vy*dt;
        }
    }

    show(){
        let vectors = [];
        let v;
        v = new vector(this.x+this.w/2,this.y,this.right/20,0,'FT,1');
        vectors.push(v);
        let upname;
        if (this.which==1){
            upname = 'FN,1'
        } else {
            upname = 'FT,2'
        }
        let leftname;
        if (this.x==449 && this.which==1){
            leftname = 'Fw,1'
        } else {
            if (this.a==0){
                leftname = 'Fs,1'
            } else {
                leftname = 'Fk,1'
            }
        }
        v = new vector(this.x,this.y-this.h/2,this.up/20,-PI/2,upname);
        vectors.push(v);
        v = new vector(this.x,this.y+this.h/2,this.down/20,PI/2,'Fg,'+this.which);
        vectors.push(v);
        v = new vector(this.x-this.w/2,this.y,this.left/20,PI,leftname);
        vectors.push(v);

        if (showVecs){
            for (let i = 0; i<vectors.length; i++){
                if (vectors[i].vmag>10){
                    vectors[i].show();
                }
            }
        }

        push();
        strokeWeight(3);
        rectMode(CENTER);
        textSize(14);
        rect(this.x,this.y,this.w,this.h);
        textAlign(CENTER,CENTER);
        text(nf(this.m)+' g',this.x,this.y);
        pop();
    }

}