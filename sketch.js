const cwidth[]=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight[]=[450,1000,1200,750,1100,250,300,900,650,600,300];

const diameter = 50;

const rSize[] =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0[] =[500,500,500,500,500,500,500,500,500,500,500];



function setup(){
  createCanvas(windowWidth, windowHeight);//描画領域を指定
  background(255);
}

function draw(){
  noStroke();
  fill(255,255,255);
  rect(0,0,windowWidth, windowHeight);
}