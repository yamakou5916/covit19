const cwidth=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight=[450,1000,1200,750,1100,250,300,900,650,600,300];

const rSize =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0 =[500,500,500,500,500,500,500,500,500,500,500];
const lSize = [0];
const diameter = 50;

const images[0] = loadImage("education.png");
const images[1] = loadImage("lifestyle.png");
const images[2] = loadImage("entertainment.png");
const images[3] = loadImage("workstyle.png");
const images[4] = loadImage("lifeevent.png");
const images[5] = loadImage("healthcare.png");
const images[6] = loadImage("lifeline.png");
const images[7] = loadImage("manufacture.png");
const images[8] = loadImage("supplychain.png");
const images[9] = loadImage("management.png");
const images[10] = loadImage("medical.png");

String bigText=
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
  noStroke();
  fill(255,255,255);
  rect(0,0,windowWidth, windowHeight);
}