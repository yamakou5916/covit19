const cwidth=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight=[450,1000,1200,750,1100,250,300,900,650,600,300];

const rSize =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0 =[500,500,500,500,500,500,500,500,500,500,500];
const lSize = [0];
const collision = 0;
const bigText = ["能力と社会性の変化","生活と価値観の変化","余暇と気晴らしの変化","職業と人生観の変化","社会通念と手続きの変化","個人情報とプライバシーの変化","人・社会との繋がりの変化","ものづくりの変化","所属意識の変化","責任領域の変化","信頼形成の変化"];

const images = [loadImage("education.png"),loadImage("lifestyle.png"),loadImage("entertainment.png"),loadImage("workstyle.png"),loadImage("lifeevent.png"),loadImage("healthcare.png"),loadImage("lifeline.png"),loadImage("manufacture.png"),loadImage("supplychain.png"),loadImage("management.png"),loadImage("medical.png")];

const Rcol = [237,237,247,247,236,236,209,209,145,145,143,143];
const Gcol = [237,237,223,223,181,181,226,226,193,193,176,176];
const Bcol = [191,191,144,144,125,125,200,200,186,186,187,187];


function setup(){
  pixelDensity(2);
  createCanvas(2000, 1500);//描画領域を指定
  background(255);
  //randomSave();
}

function draw(){
  //背景
  noStroke();
  fill(255,255,255);
  rect(0,0,windowWidth, windowHeight);

  //軸
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(14);
  textAlign(CENTER,CENTER);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  text("個人としての意識", 100, height/2);
  text("集団としての意識", width-100, height/2);
  text("文化に関する思想", width/2, height-40);
  text("社会システムに関する思想", width/2, 0+40);
  //text(bigText[0], width/2,height/2);

  for(var i=0; i<11;i++){
    //text("社会システムに関する思想", width/2,height/2);

    //wave(i);
    fill(0);
    noStroke();
    imageMode(CENTER);
    //image(images[i], width/2,height/2, 70, 70);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i], cwidth[i], cheight[i]+25);
    textSize(10);
    textAlign(CENTER,CENTER);
    //text(titleText[i][collision], cwidth[i], cheight[i]-45);
  }
}


function myCircle(var i) {
  if(i %3 == 0){
    strokeWeight(3);
  }else{
    strokeWeight(2);
}
  stroke(Rcol[i],Gcol[i],Bcol[i]); //点の色は青
  for (var h = 0; h < numsX[i].length; h ++) {
    var x = numsX[i][h];
    var y = numsY[i][h];
    povar(x, y);
  }
}


function randomSave() {

  numsX = new var[cwidth.length][2000]; 
  numsY = new var[cwidth.length][2000]; 
  for(var i=0; i<cwidth.length;i++){
    
    if(i %3 == 0){
      var radius = rSize0[i]/4;
      var count = 1500;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = sqrt(random(1));
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i] + r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] =  y;
      }
    }else if(i %3 == 1){
      var radius = rSize0[i]/4;
      var count = 2000;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = 1-(random(random(random(1))));
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i]+ r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] =  y;
      }
    }else{
      var radius = rSize0[i]/4;
      var count = 2000;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = random(1);
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i]+ r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] = y;
      }
    }
  }
}





















