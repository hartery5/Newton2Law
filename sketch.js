let pulleys = [];
let barriers = [];
let carts = [];
let ropes = [];
let plots = [];
let experiments = [];
let buttons = {};
let data = {}
let run = 0;

let m1 = 100;
let m2 = 150;
let u = 0;
let dt = 0.4;

let go = false;
let set = true;
let showVecs = false;

let colors = ['#e6194b', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#ffffff00'];
let avColors;

function setup() {
  createCanvas(1400, 700);
  textFont('Roboto Mono');
  textSize(15);
  frameRate(60);


  avColors = [];
  for (let i = 0; i<colors.length; i++){
    avColors.push(i);
  }

  newData();
    
  let p;
  p = new pulley(500,195,42);
  pulleys.push(p);
  p = new pulley(540,100,42,-1);
  pulleys.push(p);
  
  let b;
  b = new barrier(480,0,120,false);
  barriers.push(b)
  b = new barrier(0,230,520,true);
  barriers.push(b)

  let c;
  c = new cart(85,215,60,30,m1,1);
  carts.push(c);
  c = new cart(560,185,40,40,m2,2);
  carts.push(c);

  let r;
  r = new rope(40,215,500,215,true);
  ropes.push(r);
  r = new rope(560,100,560,200,false);
  ropes.push(r);

  let button;
  button = createButton('Reset');
  button.position(235, 20);
  button.mousePressed(reset);
  buttons['set'] = button;

  button = createButton('Go');
  button.position(235, 45);
  button.mousePressed(animate);
  buttons['go'] = button;

  button = createButton('Clear data');
  button.position(235, 70);
  button.mousePressed(clearData);
  buttons['clearData'] = button;

  button = createButton('Show forces');
  button.position(235, 95);
  button.mousePressed(showForces);
  buttons['showForces'] = button;

  let slider;
  slider = createSlider(500, 750, 500, 25);
  slider.position(20, 20);
  slider.size(80);
  buttons['m1'] = slider;

  slider = createSlider(10, 50, 10, 10);
  slider.position(20, 45);
  slider.size(80);
  buttons['m2'] = slider;

  slider = createSlider(0, 0.1, 0, 0.01);
  slider.position(20, 70);
  slider.size(80);
  buttons['mu'] = slider;

  p = new plot(50,350,480,75,'x (m)','Time',0.6,6);
  plots.push(p)
  p = new plot(50,450,480,75,'v (m/s)','Time',1.0,5);
  plots.push(p)
  p = new plot(50,550,480,75,'a (m/s²)','Time',1.0,5);
  plots.push(p)

  let e;
  let tasks;
  let ILQs;
  e = new experiment('Overview',400);
  tasks = ['To your left, a cart on a flat surface (m₁) is connected to a block (m₂) via a piece of string wound through two pulleys. Complete the sequence of experiments to understand how different forces influence the motion of the objects.','','This purpose of the experiment is two-fold:','(1) Introduce Free Body Diagrams','Click "Show forces". Vectors representing the external forces acting on each object of interest will appear. The following subscripts are used to distinguish the forces:',"s: static friction","k: kinetic friction","n: normal force","T: tension","g: gravity","","(2) Discover Newtons Laws:","Determine what happens to an object when the sum of the forces acting along an axis is","a) zero","b) non-zero."];
  e.loadTasks(tasks);
  e.expanded = true;
  experiments.push(e)

  e = new experiment('What do these forces represent?',370);
  tasks = ['Fs, Static Friction','A contact force from a surface which resists an object being set in motion along the plane of the surface.','','Fk, Kinetic Friction','When sliding across a surface, the surface continues to exert a force on the object which opposes its motion.','','FN, Normal Force','A contact force from a surface to another which prevents the object from passing through the surface','','FT, Tension','A contact force exerted by a rope on an object.','','Fg, Gravity','A non-contact force which pulls objects with mass towards one another.'];
  e.loadTasks(tasks);
  experiments.push(e)

  e = new experiment('Experiment 1',380);
  tasks = ['1. Set m₁ = 750 g', '2. Set m₂ = 50 g', '3. Set µ = 0.10','4. Click "Show forces"'];
  ILQs = [{"description":'Compare the magnitudes of Fs,1 and FT,1. They are:',
    "options":["equal","Fs,1 > FT,1","FT,1 > Fs,1"]},
    {"description":'Compare the magnitudes of FT,2 and Fg,2. They are:',
      "options":["equal","Fg,2 > FT,2","FT,2 > Fg,2"]},
    {"description":'Based on my above responses, I expect the objects to:',
      "options":["remain motionless","move at constant speed","move with constant acceleration"]
    }
  ]
  e.loadTasks(tasks);
  e.loadILQs(ILQs);
  experiments.push(e);

  e = new experiment('Experiment 2',420);
  tasks = ['1. Set m₁ = 750 g', '2. Set µ = 0.00', '3. Change the value of m₂','4. Use Go to perform an experiment.','5. Repeat steps 3 & 4.'];
  ILQs = [{"description":'Based on the x-t, v-t, and a-t plots, Cart 1 (m₁)',
      "options":["remained motionless","moved at constant speed","moved with constant acceleration"]},
    {"description":'While in motion the two objects had:',
        "options":["equal acceleration","unequal acceleration, a₁ > a₂", "unequal acceleration, a₂ > a₁"]},
    {"description":'The relationship between m₂ and the acceleration of Cart 1 seems to be:',
      "options":["Non-existent","Linearly Proportional","Inversely Proportional","Unpredictable"]
    }
  ]
  e.loadTasks(tasks);
  e.loadILQs(ILQs);
  experiments.push(e);

  e = new experiment('Experiment 3',215);
  tasks = ['1. Set m₂ = 10 g', '2. Set µ = 0.00', '3. Complete 3 experiments at different values of m₁.'];
  ILQs = [{"description":'The relationship between m₁ and acceleration seems to be:',
    "options":["Non-existent","Linearly Proportional","Inversely Proportional","Unpredictable"]
  }]
  e.loadTasks(tasks);
  e.loadILQs(ILQs)
  experiments.push(e);

}

function draw() {
  background(255);
  // Static Lines
  push();
  strokeWeight(5);
  stroke(200);
  line(540,20,540,100);
  line(500,200,500,230);
  strokeWeight(3);
  line(520,100,520,200);
  pop();

  push();
  textAlign(CENTER,CENTER);
  textSize(20);
  textStyle(BOLD);
  text('Cart 1',50+475/2,340);
  pop();

  m1 = buttons['m1'].value()
  carts[0].m = m1;
  m2 = buttons['m2'].value()
  carts[1].m = m2;
  u = buttons['mu'].value()

  text('m₁ = ' + nf(buttons['m1'].value(),3,1) + ' g', 110, 35)
  text('m₂ = ' + nf(buttons['m2'].value(),2,1) + ' g', 110, 60)
  text('µ  = ' + nf(buttons['mu'].value(),1,2), 110, 85)

  for (let i=0; i<barriers.length; i++){
    barriers[i].show();
  }  

  for (let i=0; i<ropes.length; i++){
    ropes[i].update(carts[i])
    ropes[i].show();
  }

  for (let i=0; i<pulleys.length; i++){
    if (go && !set){
        pulleys[i].update((carts[0].vx/40)*dt);
    }
    pulleys[i].show();
  }
  
  for (let i=0; i<carts.length; i++){
    let a = carts[i].updateVectors(m1,m2,u)
    if (go && !set){
      carts[i].move();
    }
    carts[i].show();
  }
  
  if (go){
    data[run-1]['x'].push(carts[0].x-75);
    data[run-1]['v'].push(carts[0].vx);
    data[run-1]['a'].push(carts[0].a);
  }

  if (typeof data[0] != 'undefined'){
    plots[0].show();
    plots[1].show();
    plots[2].show();
    for (let i=0;i<run+1; i++){
        let d = data[i]
        plots[0].plot(d['x'],374,d['color']);
        plots[1].plot(d['v'],25,d['color']);
        plots[2].plot(d['a'],1,d['color']);
    }

    push();
    let py = 30;
    for (let i=0;i<run; i++){
      if (i>6){
        break
      }
      let d = data[i]
      fill(d['color'])
      textStyle(BOLD);
      text('Run #'+nf(i+1)+":",625,py);
      fill(0)
      textStyle(NORMAL)
      text('m₁ = ' + nf(d['m1'],3,1) + ' g', 625, py+14)
      text('m₂ = ' + nf(d['m2'],1,1) + ' g', 625, py+28)
      text('µ  = ' + nf(d['u'],1,2), 625, py + 42);
      text('a₁ = ' + nf(d['a'][0],1,2) + ' m/s²', 625, py+56)
      py+=85;
    }
    pop();

    let ex = 775;
    let ey = 20;
    for (let i = 0; i<experiments.length; i++){
      experiments[i].setPosition(ex,ey);
      experiments[i].show();
      ey+=experiments[i].h + 20;
    }

    if (run>6){
      push();
      textStyle(BOLD);
      text('Clear your data!',625,625);
      pop()
    }
  }

  if (carts[0].x>449){
    carts[0].x = 449;
    carts[1].y = 559;
    print('Run #'+run)
    print('time: '+nf(data[run-1].x.length/60,'',3))
    print('vf: '+nf(data[run-1].v[data[run-1].v.length-1]*0.0417325,'',2))
    go = false;
  }

  if (carts[0].a==0 && go){
    go = false;
  }
}

function animate(){
    go = true;
    set = false;
    carts[0].x = 85
    carts[0].vx = 0
    carts[1].y = 185
    carts[1].vy = 0

    data[run]['m1'] = m1;
    data[run]['m2'] = m2;
    data[run]['u'] = u;

    run+=1
    newData();
}

function reset(){
  set = true;
  go = false;

  carts[0].x = 85
  carts[0].vx = 0
  carts[1].y = 185
  carts[1].vy = 0
}

function clearData(){
  if (go){
    return
  }
    run = 0
    avColors = [];
    for (let i = 0; i<colors.length; i++){
      avColors.push(i);
    }
    data = {}
    newData();
}

function newData(){
    data[run] = {}
    data[run]['x'] = []
    data[run]['v'] = []
    data[run]['a'] = []

    let n;
    if (avColors.length==0){
      n = colors.length-1;
    } else {
      n = avColors[0]
      avColors.splice(0,1);
    }
    data[run].color = colors[n]
}

function showForces(){
  showVecs = !showVecs;
  if (!showVecs){
    buttons["showForces"].html("Show forces");
  } else {
    buttons["showForces"].html("Hide forces");
  }
}
