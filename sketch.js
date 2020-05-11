//const cwidth=[350,500,700,750,300,600,1150,1500,1550,1250,1500];
//const cheight=[300,150,350,650,700,800,300,250,600,700,800];
const cwidth=[350,500,700,750,300,400,1150,1500,1550,1250,1300];
const cheight=[300,150,350,750,500,800,300,250,600,700,600];
const dwidth=[450,600,500,1200,1400,600,1150,1500,1550,1250,1500];
const dheight=[600,400,150,350,700,800,300,250,600,700,800];
var rSize =[500,500,500,500,500,500,500,500,500,500,500];
var rSize0 =[300,300,250,250,350,400,300,250,350,400,300];
const lSize = [0];
const collision = 0;
const bigText = ["輸入量","輸出量","他県からの\n移住者数","人流滞在量","国外の\n人流移動量","国内の\n人流移動量","景気動向指数","消費者態度指数","完全失業率","販売金額指数","倒産数"];
const titleText=["エデュケーション","ライフスタイル","エンタテイメント","ワークスタイル","ライフイベント","ヘルスケア","ライフライン","マニュファクチュア","サプライチェーン","マネジメント","メディカル"];
const smallText0=
[["ネット教育の\n存在感向上", "学校教育の\n自主選択化", "リモート\n学習状況\n評価制度", "遠隔下の\n社会性獲得\n人間関係教育"],
["反都市化\n地方への\n分散移住", "非定住\n複数拠点活動", "現実と仮想\nの均質化", "コミュニティ\n地方文化創生"],
["リフレッシュ\n短サイクル化", "室内での運動\n小旅行の増加", "異なる地点の\n異なる体験を\n同時に共有", "現実と仮想\n区分けが\nなくなる"],
["デジタルな\n働き方の確立", "需要変動\n季節労働化", "スキルの多角化\nマルチキャリア", "職業選択の\n価値観変化"],
["役所手続きの\nオンライン化", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "体験拡張で\n宗教観が\n変容する"],
["遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫情報の\n人物評価活用\n免疫パスポート"],
["防衛・警察\n防疫機能", "インフラの\n無人操業", "民間企業\nインフラ\n事業参入", "新領域の\nインフラ\n宅配ビジネス"],
["防疫製品の\n生産に着手", "労働力や\n工場設備\nの転用", "オープン\nイノベーション\n企業買収合併", "複数分野\n製造拠点\nのシェア"],
["地政学リスク\nブロック経済", "地産地消の\n生産体制", "一次〜三次\n産業バランス\nが変わる", "陸海空運輸\n自動運転"],
["100年スパン\n持続可能性\n計画の実行", "社会課題\nに即した\n価値提供", "利害関係者\nの幸福度を\nデザインする", "独自行動規範\nに基づく\n即断実行"],
["患者情報の\n医療機関間\nでの共有", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"],
["", "", "", ""],
];
const techText=
[["","","IoT","","ユビキタス","ウェアラブル端末","隠れモニター","","","",""],
["","","","","","AR","MR","","VR","",""],
["","","IoT","","ユビキタス","ウェアラブル端末","隠れモニター","","","",""],
["","","","","自動運転","","","","","",""],
];

var numsX = [[]];
var numsY = [[]];

const rCol=[237,237,247,247,246,246,209,209,237,237,247,143];
const gCol=[237,237,223,223,191,191,226,226,237,237,223,176];
const bCol=[191,191,144,144,135,135,200,200,191,191,144,187];
let images0;
let allImages = [];
let catImages = [];

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
  pixelDensity(2);
  canvas = createCanvas(2000, 1000);//描画領域を指定
  canvas.parent("P5Canvas");
  background(255);
  //randomSave();
  noiseSet();
  //images0 = loadImage("education.png");
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));
  allImages.push(loadImage("image/-_b.png"));

  catImages.push(loadImage("image/icon_entertainment.png"));
  catImages.push(loadImage("image/icon_lifestyle.png"));
  catImages.push(loadImage("image/icon_management.png"));
  catImages.push(loadImage("image/icon_manufacture.png"));
  catImages.push(loadImage("image/icon_supplychain.png"));
  catImages.push(loadImage("image/icon_workstyle.png"));
  //catImages.push(loadImage("image/icon_education.png"));
  //catImages.push(loadImage("image/icon_healthcare.png"));
  //catImages.push(loadImage("image/icon_lifeevent.png"));
  //catImages.push(loadImage("image/icon_medical.png"));
  //catImages.push(loadImage("image/icon_lifeline.png"));

}

function draw(){
  //
  framCnt++;

  //背景
  noStroke();
  fill(1,1,27);
  rect(0,0,2000,1500);

  //軸
  noStroke();
  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(14);
  textAlign(CENTER,CENTER);
  //line(width/2,80,width/2,height-80);
  //line(200,height/2,width-200,height/2);
  line(width/2,75,width/2,height-75);
  line(150,height/2,width-150,height/2);
  noStroke();
  fill(255);
  textSize(32);
  text("Politics", 200, 50);
  text("Economics", width-200, 50);
  text("Society", 200, height-50);
  text("Technology", width-200, height-50);
  
  textSize(14);
  text("行動指標", 100, height/2);
  text("経済指標", width-100, height/2);
  text("ミクロ指標\n（日次）", width/2, height-40);
  text("マクロ指標\n（月次）", width/2, 0+40);
  

  //意識・思想マップ
  if(showCon0%2 == 0){
    for(var i=0; i<11;i++){
      if (1000 * sin(radians(framCnt)) > 0) {
        rSize0[i] += 0.5;
        textnum = 0;
      } else {
        rSize0[i] -= 0.5;
        textnum = 1;
      }
    
      littleCircle(i)
      fill(0);
      noStroke();
      imageMode(CENTER);
      images0 = allImages[i];
      image(images0, cwidth[i], cheight[i]-50, 20, 20);
      textSize(16);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(bigText[i], cwidth[i], cheight[i]);
      //textSize(10);
      //textAlign(CENTER,CENTER);
      //text(titleText[i], cwidth[i], cheight[i]-45);
      textStyle(NORMAL);
    }
  }

  /*
  for(var i=0; i<6;i++){
    fill(0);
    noStroke();
    imageMode(CENTER);
    images1 = catImages[i];
    image(images1, dwidth[i], dheight[i]-50, 120, 120);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    //stext(bigText[i], dwidth[i], dheight[i]);
    //textSize(10);
    //textAlign(CENTER,CENTER);
    //text(titleText[i], cwidth[i], cheight[i]-45);
    textStyle(NORMAL);
    }
*/s

  //テクノロジマップ
  if(showCon1%2 == 0){
    for (var t=0; t<twidth.length; t++){
        beginShape();
        for (var i = 0; i < 450; i += 30) {
          var peaks = [];
          var j;
          if (i % 60 != 0) {
            j = startRad[t] + ((starStrkWeight + 1));
          } else {
            //j = (startRad + ((starStrkWeight + 1) * h)) * .65;
          }
          peaks.push(createVector(sin(radians(i)) * j, cos(radians(i)) * j));
          peaks.forEach(peak => {
            peak.x += (noise(xnoiseCords[i % 360 / 30]) * tsize[t]) +twidth[t];
            peak.y += (noise(ynoiseCords[i % 360 / 30]) * tsize[t]) +theight[t];
          });

          noFill();
          //fill(80, 180 + (180 / repnum * h), 100,80);

          peaks.forEach(peak => {
            stroke(145,193,186);
            strokeWeight(starStrkWeight);
            curveVertex(peak.x, peak.y);

            //for(var ii = 0; ii < techText[k].length; ii++){
            //var currentChar = techText[k].charAt(ii);
            //push();
            //translate(peak.x, peak.y); 
            //rotate(radians(i) + PI/2);
            //text(currentChar, 0, 0);
            strokeWeight(1);
            textSize(10);
            text(techText[t][k], peak.x, peak.y);
            //pop();
            //}
            
          });
          k++;
        }
        endShape();
        noiseUpdate();
        k = 0;
      }
    }


  //オファリングマップ
  if(showCon2%2 == 0){
    for (var t=0; t<twidth.length; t++){
        beginShape();
        for (var i = 0; i < 450; i += 30) {
          var peaks = [];
          var j;
          if (i % 60 != 0) {
            j = startRad2[t] + ((starStrkWeight + 1));
          } else {
            //j = (startRad + ((starStrkWeight + 1) * h)) * .65;
          }
          peaks.push(createVector(sin(radians(i)) * j, cos(radians(i)) * j));
          peaks.forEach(peak => {
            peak.x += (noise(xnoiseCords[i % 360 / 30]) * psize[t]) +pwidth[t];
            peak.y += (noise(ynoiseCords[i % 360 / 30]) * psize[t]) +pheight[t];
          });

          noStroke();
          fill(145,193,186,80);

          peaks.forEach(peak => {
            curveVertex(peak.x, peak.y);
          });
          k++;
        }
        endShape();
        noiseUpdate();
        k = 0;
      }
    }

    fill(145,193,186,80);
    if(dist(mouseX,mouseY,cwidth[0],cheight[0]) < rSize0[0]/4){
      ellipse(cwidth[0],cheight[0], rSize0[0]/2, rSize0[0]/2);
    }else if(dist(mouseX,mouseY,cwidth[1],cheight[1]) < rSize0[1]/4){
      ellipse(cwidth[1],cheight[1], rSize0[1]/2, rSize0[1]/2);
    }else if(dist(mouseX,mouseY,cwidth[2],cheight[2]) < rSize0[2]/4){
      ellipse(cwidth[2],cheight[2], rSize0[2]/2, rSize0[2]/2);
    }else if(dist(mouseX,mouseY,cwidth[3],cheight[3]) < rSize0[3]/4){
      ellipse(cwidth[3],cheight[3], rSize0[3]/2, rSize0[3]/2);
    }else if(dist(mouseX,mouseY,cwidth[4],cheight[4]) < rSize0[4]/4){
      ellipse(cwidth[4],cheight[4], rSize0[4]/2, rSize0[4]/2);
    }else if(dist(mouseX,mouseY,cwidth[5],cheight[5]) < rSize0[5]/4){
      ellipse(cwidth[5],cheight[5], rSize0[5]/2, rSize0[5]/2);
    }else if(dist(mouseX,mouseY,cwidth[6],cheight[6]) < rSize0[6]/4){
      ellipse(cwidth[6],cheight[6], rSize0[6]/2, rSize0[6]/2);
    }else if(dist(mouseX,mouseY,cwidth[7],cheight[7]) < rSize0[7]/4){
      ellipse(cwidth[7],cheight[7], rSize0[7]/2, rSize0[7]/2);
    }else if(dist(mouseX,mouseY,cwidth[8],cheight[8]) < rSize0[8]/4){
      ellipse(cwidth[8],cheight[8], rSize0[8]/2, rSize0[8]/2);
    }else if(dist(mouseX,mouseY,cwidth[9],cheight[9]) < rSize0[9]/4){
      ellipse(cwidth[9],cheight[9], rSize0[9]/2, rSize0[9]/2);
    }

}


function littleCircle(i){
    /*
    fill(255);
    stroke(0);
    strokeWeight(1);
    */
    if (i%2==0) {
      fill("#FF4978");
    }else{
      fill("#1BC3A9");
    }

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
    location.href = 'https://yamakou5916.com/#section07';
  }else if(dist(mouseX,mouseY,cwidth[1],cheight[1]) < rSize0[1]/4){
    location.href = 'https://yamakou5916.com/#section08';
  }else if(dist(mouseX,mouseY,cwidth[2],cheight[2]) < rSize0[2]/4){
    location.href = 'https://yamakou5916.com/#section01';
  }else if(dist(mouseX,mouseY,cwidth[3],cheight[3]) < rSize0[3]/4){
    location.href = 'https://yamakou5916.com/#section00';
  }else if(dist(mouseX,mouseY,cwidth[4],cheight[4]) < rSize0[4]/4){
    //location.href = 'https://yamakou5916.com/#section04';
  }else if(dist(mouseX,mouseY,cwidth[5],cheight[5]) < rSize0[5]/4){
    location.href = 'https://yamakou5916.com/#section03';
  }else if(dist(mouseX,mouseY,cwidth[6],cheight[6]) < rSize0[6]/4){
    //location.href = 'https://yamakou5916.com/#section06';
  }else if(dist(mouseX,mouseY,cwidth[7],cheight[7]) < rSize0[7]/4){
    location.href = 'https://yamakou5916.com/#section04';
  }else if(dist(mouseX,mouseY,cwidth[8],cheight[8]) < rSize0[8]/4){
    location.href = 'https://yamakou5916.com/#section05';
  }else if(dist(mouseX,mouseY,cwidth[9],cheight[9]) < rSize0[9]/4){
    location.href = 'https://yamakou5916.com/#section06';
  }
  //document.getElementById("text").innerHTML = "クリックされた！";
  //document.getElementById('popup_overlay').style.backgroundColor = 'red';
  //popup.style.transform = "scale(1)";
  //const popup_overlay = document.getElementById("popup_overlay");

};












