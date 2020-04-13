const cwidth=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
const cheight=[450,1000,1200,750,1100,250,300,900,650,600,300];
const rSize =[500,500,500,500,500,500,500,500,500,500,500];
const rSize0 =[500,500,500,500,500,500,500,500,500,500,500];
const lSize = [0];
const collision = 0;
const bigText = ["能力と社会性の変化","生活と価値観の変化","余暇と気晴らしの変化","職業と人生観の変化","社会通念と手続きの変化","個人情報とプライバシーの変化","人・社会との繋がりの変化","ものづくりの変化","所属意識の変化","責任領域の変化","信頼形成の変化"];
const titleText=["エデュケーション","ライフスタイル","エンタテイメント","ワークスタイル","ライフイベント","ヘルスケア","ライフライン","マニュファクチュア","サプライチェーン","マネジメント","メディカル"];
const smallText0=
[["ネット教育の\n存在感向上", "学校教育の\n自主選択化", "リモート\n学習状況\n評価制度", "遠隔下の\n社会性獲得\n人間関係教育"],
["反都市化\n地方への\n分散移住", "非定住\n複数拠点活動", "コミュニティ\n地方文化創生", "現実と仮想\nの均質化"],
["リフレッシュ\n短サイクル化", "室内での運動\n小旅行の増加", "異なる地点の\n異なる体験を\n同時に共有", "現実と仮想\n区分けが\nなくなる"],
["デジタルな\n働き方の確立", "需要変動\n季節労働化", "スキルの多角化\nマルチキャリア", "職業選択の\n価値観変化"],
["役所手続きの\nオンライン化", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VRでの\n体験拡張"],
["遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫情報の\n人物評価活用\n免疫パスポート"],
["宅配ビジネス\nのインフラ化", "インフラの\n無人操業", "インフラの\n生産自由化", "位置情報取得"],
["防疫製品の\n生産に着手", "工場設備\nの転用", "オープン\nイノベーション\n企業買収合併", "製造拠点\nのシェア"],
["地政学リスク\nブロック経済", "地産地消の\n生産体制", "一次〜三次\n産業バランス\nが変わる", "陸海空運輸\n自動運転"],
["企業の\n持続可能性\nの検討", "社会課題\nに即した\n提供価値", "人材ストレス\n管理・環境\n整備", "即断即決\n独自行動規範"],
["電子カルテの\nブロックチェーン", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"],
["", "", "", ""],
];
const techText=["","","IoT","","ユビキタス","ウェアラブル端末","隠れモニター","","","",""];

var numsX = [[]];
var numsY = [[]];

const rCol=[237,237,247,247,236,236,209,209,237,237,247,143];
const gCol=[237,237,223,223,181,181,226,226,237,237,223,176];
const bCol=[191,191,144,144,125,125,200,200,191,191,144,187];
let images0;
let allImages = [];

const twidth=[700,1150,120];//,500,1500,1100,1500,800];
const theight=[500,1000,400];//,750,1100,250,300,900];
const tsize=[150,200,80];

var repnum = 7;
var startRad = [300,600,150];
var starStrkWeight = 2;
var xnoiseCords = [], ynoiseCords = [];
var k=0;



function setup(){
  createCanvas(2000, 1500);//描画領域を指定
  background(255);
  randomSave();
  noiseSet();
  //images0 = loadImage("education.png");
  allImages.push(loadImage("education.png"));
  allImages.push(loadImage("lifestyle.png"));
  allImages.push(loadImage("entertainment.png"));
  allImages.push(loadImage("workstyle.png"));
  allImages.push(loadImage("lifeevent.png"));
  allImages.push(loadImage("healthcare.png"));
  allImages.push(loadImage("lifeline.png"));
  allImages.push(loadImage("manufacture.png"));
  allImages.push(loadImage("supplychain.png"));
  allImages.push(loadImage("management.png"));
  allImages.push(loadImage("medical.png"));

}

function draw(){
  //背景
  noStroke();
  fill(255,255,255);
  rect(0,0,2000,1500);

  //軸
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(14);
  textAlign(CENTER,CENTER);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  noStroke();
  text("個人としての意識", 100, height/2);
  text("集団としての意識", width-100, height/2);
  text("文化に関する思想", width/2, height-40);
  text("社会システムに関する思想", width/2, 0+40);

  //テクノロジマップ
for (var t=0; t<twidth.length; t++){
  for (var h = 0; h < repnum; h++) {
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
      stroke(145,193,186);
      strokeWeight(starStrkWeight);
      k = 0;

      peaks.forEach(peak => {
        curveVertex(peak.x, peak.y);
        for(var ii = 0; ii < techText[k].length; ii++){
          var currentChar = techText[k].charAt(ii);
          push();
          translate(peak.x, peak.y); 
          //rotate(radians(i) + PI/2);
          //text(currentChar, 0, 0);
          text(techText[k], peak.x, peak.y);
          pop();
        }
        
      });
      k++;
    }
    //text(peaks, width/2, height/2);
    endShape();
    noiseUpdate();
    k = 0;
  }
}


  //意識・思想マップ
  for(var i=0; i<11;i++){
    myCircle(i);
    littleCircle(i)
    fill(0);
    noStroke();
    imageMode(CENTER);
    images0 = allImages[i];
    image(images0, cwidth[i], cheight[i]-10, 70, 70);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i], cwidth[i], cheight[i]+25);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(titleText[i], cwidth[i], cheight[i]-45);
  }

}



function randomSave() {
  for(var i=0; i<11;i++){
    var radius = rSize0[i]/4;
    var count = 1500;
    numsX.push([i]);
    numsY.push([i]);
    if(i %3 == 0){
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = sqrt(random(1));
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i] + r * radius * sin(angle);
        numsX[i].push(x);
        numsY[i].push(y);
      }
    }else if(i %3 == 1){
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = 1-(random(random(random(1))));
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i] + r * radius * sin(angle);
        numsX[i].push(x);
        numsY[i].push(y);
      }
    }else{
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = random(1);
        var x = cwidth[i]+ r * radius * cos(angle);
        var y = cheight[i] + r * radius * sin(angle);
        numsX[i].push(x);
        numsY[i].push(y);
      }
    }
  }

}


function myCircle(i){
  strokeWeight(3);
  stroke(rCol[i],gCol[i],bCol[i]);
  //text(numsX[0][0], width/2,height/2);
  for (var h = 0; h < numsX[i].length; h++){
    var x = numsX[i][h];
    var y = numsY[i][h];
    point(x, y);
  }
  //var aaa = numsX[0][0] = 1111111;
  //text(numsX[i][0], cwidth,cheight);

}

function littleCircle(i){
    /*
    fill(255);
    stroke(0);
    strokeWeight(1);
    */      
    fill(0);
    stroke(0);
    strokeWeight(1);
    ellipse(cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
    ellipse(cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
    ellipse(cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
    ellipse(cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
    fill(255);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(smallText0[i][0], cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6);
    text(smallText0[i][1], cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6);
    text(smallText0[i][2], cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6);
    text(smallText0[i][3], cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6);
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

  















