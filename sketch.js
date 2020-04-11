const cwidth=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight=[450,1000,1200,750,1100,250,300,900,650,600,300];

const rSize =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0 =[500,500,500,500,500,500,500,500,500,500,500];
const lSize = [0];
const diameter = 50;

const images0 = [loadImage("education.png");
const images1 = loadImage("lifestyle.png");
const images2 = loadImage("entertainment.png");
const images3 = loadImage("workstyle.png");
const images4 = loadImage("lifeevent.png");
const images5 = loadImage("healthcare.png");
const images6 = loadImage("lifeline.png");
const images7 = loadImage("manufacture.png");
const images8 = loadImage("supplychain.png");
const images9 = loadImage("management.png");
const images10 = loadImage("medical.png");

const bigText=
[["能力と社会性の変化","能力と社会性の変化",],
["生活と価値観の変化","生活と価値観の変化",],
["余暇と気晴らしの変化","余暇と気晴らしの変化",],
["職業と人生観の変化","職業と人生観の変化",],
["社会通念と手続きの変化","社会通念と手続きの変化",],
["個人情報とプライバシーの変化","個人情報とプライバシーの変化",],
["人・社会との繋がりの変化","人・社会との繋がりの変化",],
["ものづくりの変化","ものづくりの変化",],
["所属意識の変化","所属意識の変化",],
["責任領域の変化","責任領域の変化",],
["信頼形成の変化","信頼形成の変化",],
];

function setup(){
  createCanvas(windowWidth, windowHeight);//描画領域を指定
  background(255);
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

  for(int i=0; i<cwidth.length;i++){
    myCircle(i) ;
    if(sin(radians(frameCnt[i])) == 1){
      colornum[i] += 1;
      if(colornum[i]==4){
        colornum[i]=0;
      }
    }
    wave(i);
    fill(0);
    noStroke();
    imageMode(CENTER);
    //image(images[i], cwidth[i], cheight[i]-10, 70, 70);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i][collision], cwidth[i], cheight[i]+25);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(titleText[i][collision], cwidth[i], cheight[i]-45);
  }

}




























