class experiment {
    constructor(name,expandedHeight){
        this.name = name;
        this.description = '';
        this.ilqs = [{"description":"","options":[]}];
        this.plot = new plot(0,0,0,0,'','','',0);
        this.tasks = [];
        this.data = {};
        this.button = createButton('+');
        this.expandedHeight = expandedHeight;
        this.button.position(0,0);
        this.button.hide();
        this.button.mousePressed(() => {
            this.expanded = !this.expanded;
        });
        this.expanded = false;
        this.position = createVector(0,0);
        this.h = 0;
        this.w = 600;
    }

    loadData(data){
        this.data = data;
    }

    loadTasks(tasks){
        this.tasks = tasks;
    }

    loadDescription(description){
        this.description = description;
    }

    loadILQs(ilqs){
        this.ilqs = ilqs;
    }

    loadPlot(plot){
        this.plot = plot;
    }

    setPosition(x,y){
        this.position.x = x;
        this.position.y = y;
    }

    expand(button){
        this.button.expanded = !this.button.expanded;
    }

    show(){
        push();
        translate(this.position.x,this.position.y);
        if (this.expanded){
            textSize(14);
            this.h = this.expandedHeight;
            fill(255);
            stroke(0);
            strokeWeight(3);
            rect(0,0,this.w,this.expandedHeight,20,20);

            let hintText = ''
            for (let i = 0; i<this.tasks.length;i++){
              hintText += this.tasks[i];
              hintText += '\n'
            }

            noStroke();
            fill(0);
            textAlign(LEFT,TOP);
            textLeading(16);
            textWrap(WORD);
            text(hintText,20,60,this.w-40);


            let ilqText = ''
            let letters = ['a)','b)','c)','d)','e)']
            for (let i = 0; i<this.ilqs.length; i++){
                ilqText += 'Q' + nf(i+1)+'. ';
                ilqText += this.ilqs[i].description;
                ilqText += '\n'
                for (let j = 0; j<this.ilqs[i].options.length; j++){
                    ilqText += letters[j]+' '
                    ilqText += this.ilqs[i].options[j];
                    ilqText += '\n'
                }
                ilqText += '\n'
            }

            if (this.ilqs[0].description.length==0){
                ilqText='';
            }
            noStroke();
            fill(0);
            textAlign(LEFT,TOP);
            textLeading(16);
            textWrap(WORD);
            text(ilqText,20,60+20*this.tasks.length,this.w-40);
        } else {
            this.h = 40;
        }
        textSize(16)
        fill('#04AA6D');
        stroke(0);
        strokeWeight(3);
        rect(0,0,this.w,40,20,20);
        noStroke();
        fill(255);
        textAlign(LEFT,CENTER)
        textStyle(BOLD)
        text(this.name,20,20);
        if (this.expanded){
            this.button.html("-");
        } else {
            this.button.html("+");
        }
        this.button.position(this.position.x+this.w-30,this.position.y+8);
        this.button.show();
        pop();


    }

}