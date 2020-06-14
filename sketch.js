const cwidth=[200,400,600,800,1000,1200,1400,1600,1800,];
var cheight=[500,500,500,500,500,500,500,500,500,];
const dwidth=[450,600,500,1200,1400,600,1150,1500,1550,1250,1500];
const dheight=[600,400,150,350,700,800,300,250,600,700,800];
var rSize =[300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300];
var rSize0 =[300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300];
const lSize = [0];
const collision = 0;
const bigText = ["Living Sphere","Touchpoint","Basket","Work Place","Management","Social Relation","Sentiment","Regulatory","Supply Chain","販売金額指数","他県からの\n移住者数","完全失業率","倒産数\n負債総額","雇用形態\n非正規率"];
const titleText = [25,15,2,22.2,5.4,10.5,7.5,8.6,9.3];
var showNum = [0,0,0,0,0,0,0,0,0]
var changeRate = [25,15,2,22.2,5.4,10.5,7.5,8.6,9.3];
var ratecolor = ["#FF4978","#1BC3A9"];
var updown =[0,0,0,0,0,0,0,0,0];

var numsX = [[]];
var numsY = [[]];

const rCol=[237,237,247,247,246,246,209,209,237,237,247,143];
const gCol=[237,237,223,223,191,191,226,226,237,237,223,176];
const bCol=[191,191,144,144,135,135,200,200,191,191,144,187];
let images0;
let allImages = [];
let catImages = [];
let backphoto = [];

const twidth=[700,750,1200,1300];
const theight=[500,1150,400,700];
const tsize=[150,500,80,50];
const pwidth=[700,750,1200,1300];
const pheight=[500,1150,400,700];
const psize=[150,500,80,50];

var startRad = [300,500,150,200];
var startRad2 = [200,200,200,200];

var starStrkWeight = 2;
var xnoiseCords = [], ynoiseCords = [];
var k=0;

var showCon0 = 0;
var showCon1 = 1;
var showCon2 = 1;
var framCnt = 0;

var canvas;

function setup(){
  changeRate[0] = ratedata0();
  changeRate[1] = ratedata1();
  changeRate[2] = ratedata2();
  changeRate[3] = ratedata3();
  changeRate[4] = ratedata4();
  changeRate[5] = ratedata5();
  changeRate[6] = ratedata6();
  changeRate[7] = ratedata7();
  changeRate[8] = ratedata8();
  pixelDensity(2);
  canvas = createCanvas(windowWidth*2, windowHeight*2);
  //rectMode(CENTER);
  //canvas = createCanvas(2000, 1000);//描画領域を指定
  canvas.parent("P5Canvas");
  background(255);
  backphoto.push(loadImage("image/0.jpg"));
  backphoto.push(loadImage("image/1.jpg"));
  backphoto.push(loadImage("image/2.jpg"));
  backphoto.push(loadImage("image/3.jpg"));
  backphoto.push(loadImage("image/4.jpg"));
  backphoto.push(loadImage("image/5.jpg"));
  backphoto.push(loadImage("image/6.jpg"));
  backphoto.push(loadImage("image/7.jpg"));
  backphoto.push(loadImage("image/8.jpg"));

  //randomSave();
  noiseSet();
  //images0 = loadImage("education.png");
  allImages.push(loadImage("image/icon/living_sphere.png"));
  allImages.push(loadImage("image/icon/customer_touchpoint.png"));
  allImages.push(loadImage("image/icon/shopping_basket.png"));
  allImages.push(loadImage("image/icon/work_place.png"));
  allImages.push(loadImage("image/icon/management_style.png"));
  allImages.push(loadImage("image/icon/social_relation.png"));
  allImages.push(loadImage("image/icon/business_sentiment.png"));
  allImages.push(loadImage("image/icon/regulatory.png"));
  allImages.push(loadImage("image/icon/supply_chain.png"));
  catImages.push(loadImage("image/graph_icon/living_sphere.png"));
  catImages.push(loadImage("image/graph_icon/customer_touchpoint.png"));
  catImages.push(loadImage("image/graph_icon/shopping_basket.png"));
  catImages.push(loadImage("image/graph_icon/work_place.png"));
  catImages.push(loadImage("image/graph_icon/management_style.png"));
  catImages.push(loadImage("image/graph_icon/social_relation.png"));
  catImages.push(loadImage("image/graph_icon/business_sentiment.png"));
  catImages.push(loadImage("image/graph_icon/regulatory.png"));
  catImages.push(loadImage("image/graph_icon/supply_chain.png"));
  textnum = 0;
}

function draw(){
  //
  framCnt++;


  //背景
  noStroke();
  //fill(1,1,27);
  //rect(0,0,2000,1500);
  image(backphoto[textnum], 1000, 750, 2000, 1500);
  fill('rgba(0,0,0,0.4)');
  rect(0,0,4000,3000);

  //軸
  noStroke();
  fill(0);
  ellipse(300, 50, 50, 50);
  ellipse(500, 50, 50, 50);
  ellipse(900, 50, 50, 50);
  ellipse(1100, 50, 50, 50);
  ellipse(1500, 50, 50, 50);
  ellipse(1700, 50, 50, 50);
  rect(300,25,200,50);
  rect(900,25,200,50);
  rect(1500,25,200,50);
  ellipse(1950, 300, 50, 50);
  ellipse(1950, 700, 50, 50);
  rect(1925,300,50,400);

  textStyle(NORMAL);
  noStroke();
  fill(255);
  stroke(255);
  strokeWeight(0.5);
  textSize(14);
  textAlign(CENTER,CENTER);
  line(700,80,700,height-80);
  line(1300,80,1300,height-80);
  line(200,height/2,width-200,height/2);
  noStroke();
  fill(255);
  textSize(24);
  text("消費者の動き", 400, 50);
  text("労働者の動き", 1000, 50);
  text("企業の動き", 1600, 50);

  text("+", 1950, 300);
  text("-", 1950, 700);
  text("変", 1950, 470);
  text("化", 1950, 500);
  text("率", 1950, 530);


  //意識・思想マップ
  for(var i=0; i<9;i++){
      /*if (1000 * sin(radians(framCnt)) > 0) {
      rSize0[i] += 0.5;
      textnum = 0;
    } else {
      rSize0[i] -= 0.5;
      textnum = 1;
    }*/

    if (changeRate[i]<0) {
      updown[i]=0;
      if(Math.abs(changeRate[i]) >= framCnt * 0.1){
        showNum[i] = (framCnt * 0.1).toFixed(1);
        cheight[i] = cheight[i] + 1;
      }else{
        showNum[i] = changeRate[i];
      }
    }else{
      updown[i]=1;
      if(Math.abs(changeRate[i]) >= framCnt * 0.1){
        showNum[i] = (framCnt * 0.1).toFixed(1);
        cheight[i] = cheight[i] - 1;
      }else{
        showNum[i] = changeRate[i];
      }
    }

    littleCircle(i);
    fill(0);
    noStroke();
    imageMode(CENTER);
    images0 = allImages[i];
    image(images0, cwidth[i], cheight[i]-30, 50, 50);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text(bigText[i], cwidth[i], cheight[i]);
    textSize(24);
    textAlign(CENTER,CENTER);
    text(showNum[i], cwidth[i], cheight[i]+30);
    textStyle(NORMAL);
  }

    //fill(145,193,186,80);
    //fill(ratecolor[updown[textnum]]);
    //textSize(16);
    //textStyle(BOLD);
    //textAlign(CENTER,CENTER);
    if(dist(mouseX,mouseY,cwidth[0],cheight[0]) < rSize0[0]/4){
      textnum = 0;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[0],cheight[0], rSize0[0]/2, rSize0[0]/2);
      fill(255);    
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
  
    }else if(dist(mouseX,mouseY,cwidth[1],cheight[1]) < rSize0[1]/4){
      textnum = 1;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[1],cheight[1], rSize0[1]/2, rSize0[1]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);     
    }else if(dist(mouseX,mouseY,cwidth[2],cheight[2]) < rSize0[2]/4){
      textnum = 2;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[2],cheight[2], rSize0[2]/2, rSize0[2]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);    
    }else if(dist(mouseX,mouseY,cwidth[3],cheight[3]) < rSize0[3]/4){
      textnum = 3;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[3],cheight[3], rSize0[3]/2, rSize0[3]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }else if(dist(mouseX,mouseY,cwidth[4],cheight[4]) < rSize0[4]/4){
      textnum = 4;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[4],cheight[4], rSize0[4]/2, rSize0[4]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }else if(dist(mouseX,mouseY,cwidth[5],cheight[5]) < rSize0[5]/4){
      textnum = 5;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[5],cheight[5], rSize0[5]/2, rSize0[5]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }else if(dist(mouseX,mouseY,cwidth[6],cheight[6]) < rSize0[6]/4){
      textnum = 6;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[6],cheight[6], rSize0[6]/2, rSize0[6]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }else if(dist(mouseX,mouseY,cwidth[7],cheight[7]) < rSize0[7]/4){
      textnum = 7;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[7],cheight[7], rSize0[7]/2, rSize0[7]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }else if(dist(mouseX,mouseY,cwidth[8],cheight[8]) < rSize0[8]/4){
      textnum = 8;
      fill(ratecolor[updown[textnum]]);
      ellipse(cwidth[8],cheight[8], rSize0[8]/2, rSize0[8]/2);
      fill(255);
      noStroke();
      imageMode(CENTER);
      images0 = catImages[textnum];
      image(images0, cwidth[textnum], cheight[textnum]-30, 50, 50);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[textnum], cwidth[textnum], cheight[textnum]);
      textSize(24);
      textAlign(CENTER,CENTER);
      text(showNum[textnum], cwidth[textnum], cheight[textnum]+30);
      textStyle(NORMAL);
    }

}


function littleCircle(i){
    /*
    fill(255);
    stroke(0);
    strokeWeight(1);
    
    if (i%2==0) {
      fill("#FF4978");
    }else{
      fill("#1BC3A9");
    }*/
    fill(255);
    ellipse(cwidth[i], cheight[i], rSize0[i]/2, rSize0[i]/2);

    noFill();
    //fill(255);
    stroke(255);
    strokeWeight(0.2);
    //noStroke();
    drawingContext.setLineDash([5, 5]);
    //line(30, height * 0.2, width - 30, height * 0.2);
    ellipse(cwidth[i], cheight[i], rSize[i]/2, rSize[i]/2);
    drawingContext.setLineDash([1,1]);
    fill(255);
    noFill();
    stroke(255);
    strokeWeight(1);
    noStroke();
    ellipse(cwidth[i]-rSize[i]/6, cheight[i]-rSize[i]/6, 80, 80);
    ellipse(cwidth[i]+rSize[i]/6, cheight[i]-rSize[i]/6, 80, 80);
    ellipse(cwidth[i]+rSize[i]/6, cheight[i]+rSize[i]/6, 80, 80);
    ellipse(cwidth[i]-rSize[i]/6, cheight[i]+rSize[i]/6, 80, 80);
    fill(255);
    textSize(10);
    textAlign(CENTER,CENTER);
    //text(smallText0[i][0], cwidth[i]-rSize[i]/6, cheight[i]-rSize[i]/6);
    //text(smallText0[i][1], cwidth[i]+rSize[i]/6, cheight[i]-rSize[i]/6);
    //text(smallText0[i][2], cwidth[i]+rSize[i]/6, cheight[i]+rSize[i]/6);
    //text(smallText0[i][3], cwidth[i]-rSize[i]/6, cheight[i]+rSize[i]/6);
  }



function noiseSet() {
    for (var i = 0; i < 12; i++) {
        xnoiseCords[i] = random(-1000, 1000);
        ynoiseCords[i] = random(-1000, 1000);
    }
}
function noiseUpdate() {
    for (var i = 0; i < 12; i++) {
        xnoiseCords[i] += 0.00003;
        ynoiseCords[i] += 0.00003;
    }
}



function showMind(){showCon0++;}
function showTechnology(){showCon1++;}
function showPwC(){showCon2++;}





const popup = document.getElementById("popup_overlay");

function mouseClicked(){
  if(dist(mouseX,mouseY,cwidth[0],cheight[0]) < rSize0[0]/4){
    location.href = '#section00';
  }else if(dist(mouseX,mouseY,cwidth[1],cheight[1]) < rSize0[1]/4){
    location.href = '#section01';
  }else if(dist(mouseX,mouseY,cwidth[2],cheight[2]) < rSize0[2]/4){
    location.href = '#section02';
  }else if(dist(mouseX,mouseY,cwidth[3],cheight[3]) < rSize0[3]/4){
    location.href = '#section03';
  }else if(dist(mouseX,mouseY,cwidth[4],cheight[4]) < rSize0[4]/4){
    location.href = '#section04';
  }else if(dist(mouseX,mouseY,cwidth[5],cheight[5]) < rSize0[5]/4){
    location.href = '#section05';
  }else if(dist(mouseX,mouseY,cwidth[6],cheight[6]) < rSize0[6]/4){
    location.href = '#section06';
  }else if(dist(mouseX,mouseY,cwidth[7],cheight[7]) < rSize0[7]/4){
    location.href = '#section07';
  }else if(dist(mouseX,mouseY,cwidth[8],cheight[8]) < rSize0[8]/4){
    location.href = '#section08';
  }
  //document.getElementById("text").innerHTML = "クリックされた！";
  //document.getElementById('popup_overlay').style.backgroundColor = 'red';
  //popup.style.transform = "scale(1)";
  //const popup_overlay = document.getElementById("popup_overlay");

};


function windowResized() {
  canvas = resizeCanvas(windowWidth*2, windowHeight*2);
}





