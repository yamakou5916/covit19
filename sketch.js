var a=0; 
var cwindowWidth[]=[400,1150,450,500,1500,1100,1500,800,1550,1150,750];
var cwindowHeight[]=[450,1000,1200,750,1100,250,300,900,650,600,300];

var owindowWidth[]=[550,570,550,640,740, 260,850,1030,760];
var owindowHeight[]=[1070,670,350,310,400,650,1350,1070,920];
var textnum = 0;
var grdnum = 0;
//var frameCnt = 0;
var frameCnt[] = [200,200,0,0,100,0,0,0,0,0,0];
var numFrames = 12; //アニメーションのフレーム数
//let images[] = new PImage[numFrames];

var rSize0[] = [500,500,500,500,500,500,500,500,500,500,500];
var rSize[] = [500,500,500,500,500,500,500,500,500,500,500];
var lSize[] = [0];
var radius = 200;
var collision = 0;
var rcol[] = [237,237,247,247,236,236,209,209,145,145,143,143,];
var gcol[] = [237,237,223,223,181,181,226,226,193,193,176,176,];
var bcol[] = [191,191,144,144,125,125,200,200,186,186,187,187,];
var colornum[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var applyX = 0;
var applyY = 0;
var distance[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var numsX[][] = [[]];
var numsY[][] = [[]];

String titleText[][] =
[["エデュケーション","エデュケーション",],
["ライフスタイル","ライフスタイル",],
["エンタテイメント","エンタテイメント",],
["ワークスタイル","ワークスタイル",],
["ライフイベント","ライフイベント",],
["ヘルスケア","ヘルスケア",],
["ライフライン","ライフライン",],
["マニュファクチュア","マニュファクチュア",],
["サプライチェーン","サプライチェーン",],
["マネジメント","マネジメント",],
["メディカル","メディカル",],
];

String bigText[][] =
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

String smallText0[][] =
[["ネット教育の\n存在感向上", "学校教育の\n自主選択化", "リモート\n学習状況\n評価制度", "遠隔下の\n社会性獲得\n人間関係教育"],
["反都市化\n地方への\n分散移住", "非定住\n複数拠点活動", "コミュニティ\n地方文化創生", "現実と仮想\nの均質化"],
["リフレッシュ\n短サイクル化", "小旅行の増加\n家庭内フィットネス", "異なる体験を\n同時に共有", "現実と仮想\n区分けが\nなくなる"],
["デジタルな\n働き方の確立", "需要変動\n季節労働化", "スキルの多角化\nマルチキャリア", "職業選択の\n価値観変化"],
["役所手続きの\nオンライン化", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VRでの\n体験拡張"],
["遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫パスポート\n免疫情報での\n人物評価"],
["宅配ビジネス\nのインフラ化", "インフラの\n無人操業", "インフラの\n生産自由化", "位置情報取得"],
["防疫製品の\n生産に着手", "工場設備\nの転用", "オープン\nイノベーション\n企業買収合併", "製造拠点\nのシェア"],
["地政学リスク\nブロック経済", "地産地消の\n生産体制", "一次〜三次\n産業バランス\nが変わる", "陸海空運輸\n自動運転"],
["企業の\n持続可能性\nの検討", "社会課題\nに即した\n提供価値", "人材ストレス\n管理・環境\n整備", "即断即決\n独自行動規範"],
["電子カルテの\nブロックチェーン", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"],
["", "", "", ""],
];

String smallText1[][] =
[["ネット教育の\n存在感向上", "学校教育の\n自主選択化", "リモート\n学習状況\n評価体制", "遠隔下の\n社会性\n人間関係教育"],
["反都市化\n地方への\n分散移住", "非定住\n複数拠点活動", "コミュニティn地方文化創生", "現実と仮想\nの均質化"],
["リフレッシュ\n短サイクル化", "小旅行の増加\n家庭内フィットネス", "異なる体験を\n同時に共有", "現実と仮想\n区分けが\nなくなる"],
["デジタルな\n働き方の確立", "需要変動\n季節労働化", "スキルの多角化\nマルチキャリア", "職業選択の\n価値観変化"],
["役所手続きの\nオンライン化", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VRでの\n体験拡張"],
["遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫パスポート\n免疫情報での\n人物評価"],
["宅配ビジネス\nのインフラ化", "インフラの\n無人操業", "インフラの\n生産自由化", "位置情報取得"],
["防疫製品の\n生産に着手", "工場設備\nの転用", "企業買収合併\nオープン\nイノベーション", "製造拠点\nのシェア"],
["地政学リスク\nブロック経済", "地産地消の\n生産体制", "一次〜三次\n産業バランス\nが変わる", "陸海空運輸\n自動運転"],
["企業の\n持続可能性\nの検討", "社会課題\nに即した\n提供価値", "人材ストレス\n管理・環境\n整備", "即断即決\n独自行動規範"],
["電子カルテの\nブロックチェーン", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"],
["", "", "", ""],
];

String otherText[][] =
[["フェイクニュース\nの横行","0"],
["地産地消の\n意識が育つ","0"],
["株価の暴落","0"],
["遠隔×ライブ\nエンタテイメント","0"],
["医師不足\n医療崩壊","0"],
["経済圏の\nブロック化","0"],
["生活全般での\nDIY化が進む","0"],
["行き過ぎた\n清潔観・差別","0"],
["デジタル化\nによる失業","0"],
["パーソナル\nスペースと\n心理的距離の拡大","0"],
[],
];

function setup(){
  //pixelDensity(1);
  //PFont font = createFont("NotoSansCJKjp-Regular",50);
  //textFont (font);
  createCanvas(2000,1500);
  noStroke();
  background(255);
  smooth();
  //randomSave();
  /*
  images[0] = loadImage("education.png");
  images[1] = loadImage("lifestyle.png");
  images[2] = loadImage("entertainment.png");
  images[3] = loadImage("workstyle.png");
  images[4] = loadImage("lifeevent.png");
  images[5] = loadImage("healthcare.png");
  images[6] = loadImage("lifeline.png");
  images[7] = loadImage("manufacture.png");
  images[8] = loadImage("supplychain.png");
  images[9] = loadImage("management.png");
  images[10] = loadImage("medical.png");
  */
}

function draw(){
  //背景
  noStroke();
  fill(255,255,255);
  rect(0,0,windowWidth,windowHeight);
  //BigCircle();
  //軸
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(14);
  //textAlign(CENTER,CENTER);
  line(windowWidth/2,0,windowWidth/2,windowHeight);
  line(0,windowHeight/2,windowWidth,windowHeight/2);
  text("個人としての意識", 100, windowHeight/2);
  text("集団としての意識", windowWidth-100, windowHeight/2);
  text("文化に関する思想", windowWidth/2, windowHeight-40);
  text("社会システムに関する思想", windowWidth/2, 0+40);

/*
  //if(1000 * sin(radians(frameCnt[0])) > 0) {
  if(lSize[0] < 400) {
    lSize[0] += 2;
    textnum = 0;
  } else {
    //lSize[0] += 2;
    textnum = 1;
  }

  for(var i=0; i<cwindowWidth.length;i++){
    myCircle(i) ;
    if(sin(radians(frameCnt[i])) == 1){
      colornum[i] += 1;
      if(colornum[i] == 4){
      colornum[i]=0;
      }
    }
    wave(i);
    fill(0);
    noStroke();
    imageMode(CENTER);
    image(images[i], cwindowWidth[i], cwindowHeight[i]-10, 70, 70);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i][collision], cwindowWidth[i], cwindowHeight[i]+25);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(titleText[i][collision], cwindowWidth[i], cwindowHeight[i]-45);
  }

  for (var i = pgl.size() - 1; i >= 0; i--) {
    PG pg = pgl.get(i);
    if (pg.dead) {
      pgl.remove(i);
    } else {
      pg.draw();
    }
  }
  */
}

/*
 function wave(var i){
    distance[i] = 100;
    
    fill(0);
    stroke(0);
    strokeWeight(1);
    ellipse(cwindowWidth[i]-rSize0[i]/6, cwindowHeight[i]-rSize0[i]/6, 80, 80);
    ellipse(cwindowWidth[i]+rSize0[i]/6, cwindowHeight[i]-rSize0[i]/6, 80, 80);
    ellipse(cwindowWidth[i]+rSize0[i]/6, cwindowHeight[i]+rSize0[i]/6, 80, 80);
    ellipse(cwindowWidth[i]-rSize0[i]/6, cwindowHeight[i]+rSize0[i]/6, 80, 80);
    fill(255);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(smallText0[i][0], cwindowWidth[i]-rSize0[i]/6, cwindowHeight[i]-rSize0[i]/6);
    text(smallText0[i][1], cwindowWidth[i]+rSize0[i]/6, cwindowHeight[i]-rSize0[i]/6);
    text(smallText0[i][2], cwindowWidth[i]+rSize0[i]/6, cwindowHeight[i]+rSize0[i]/6);
    text(smallText0[i][3], cwindowWidth[i]-rSize0[i]/6, cwindowHeight[i]+rSize0[i]/6);
    collision = 0;
  }


function BigCircle(){
  noStroke();
  fill(color(220,202,163,100));
  ellipse(400, 600, lSize[0], lSize[0]);
  ellipse(600, 800, lSize[0], lSize[0]);
  ellipse(1200, 900, lSize[0], lSize[0]);
  ellipse(850, 200, lSize[0], lSize[0]);
  ellipse(1000, 400, lSize[0], lSize[0]);
  ellipse(1250, 450, lSize[0], lSize[0]);
  ellipse(750, 1350, lSize[0], lSize[0]);
}


function myCircle(var i) {
  if(i %3 == 0){
    strokeWeight(3);
  }else{
    strokeWeight(2);
  }
  stroke(rcol[i],gcol[i],bcol[i]);
  for (var h = 0; h < numsX[i].length; h ++) {
    var x = numsX[i][h];
    var y = numsY[i][h];
    povar(x, y);
  }
}
*/

/*
function randomSave() {
  numsX = new var[cwindowWidth.length][2000]; 
  numsY = new var[cwindowWidth.length][2000]; 
  for(var i=0; i<cwindowWidth.length;i++){
    if(i %3 == 0){
      var radius = rSize0[i]/4;
      var count = 1500;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = sqrt(random(1));
        var x = cwindowWidth[i]+ r * radius * cos(angle);
        var y = cwindowHeight[i] + r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] = y;
      }
    }else if(i %3 == 1){
      var radius = rSize0[i]/4;
      var count = 2000;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = 1-(random(random(random(1))));
        var x = cwindowWidth[i]+ r * radius * cos(angle);
        var y = cwindowHeight[i] + r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] = y;
      }
    }else{
      var radius = rSize0[i]/4;
      var count = 2000;
      for (var h = 0; h < count; h ++) {
        var angle = random(TWO_PI);
        var r = random(1);
        var x = cwindowWidth[i]+ r * radius * cos(angle);
        var y = cwindowHeight[i] + r * radius * sin(angle);
        numsX[i][h] = x;
        numsY[i][h] = y;
      }
    }
  }
}
*/

    /*
    for (var i = pgl.size() - 1; i >= 0; i--) {
    PG pg = pgl.get(i);
    if (pg.dead) {
      pgl.remove(i);
    } else {
      pg.draw();
    }
  }
    
//Collision
   for(var i=0; i<cwindowWidth.length;i++){
     for(var ii=0; ii<cwindowWidth.length;ii++){
         if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
           pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]+rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]+rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]+rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]+rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]+rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]-rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]-rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]+rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]+rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]+rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwindowWidth[i]-rSize[i]/3,cwindowHeight[i]+rSize[i]/3,cwindowWidth[ii]-rSize[ii]/3,cwindowHeight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwindowWidth[i]-rSize[i]/3+cwindowWidth[ii]-rSize[ii]/3)/2, (cwindowHeight[i]+rSize[i]/3+cwindowHeight[ii]-rSize[ii]/3)/2, 10, 1));
        }
     } 
   }
   
//line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwindowWidth[0]+rSize[0]/3, cwindowHeight[0]+rSize[0]/3, cwindowWidth[1]-rSize[1]/3, cwindowHeight[1]-rSize[1]/3);
  line(cwindowWidth[0]-rSize[0]/3, cwindowHeight[0]+rSize[0]/3, cwindowWidth[2]-rSize[2]/3, cwindowHeight[2]-rSize[2]/3);
  line(cwindowWidth[1]+rSize[1]/3, cwindowHeight[1]-rSize[1]/3, cwindowWidth[3]-rSize[3]/3, cwindowHeight[3]-rSize[3]/3);
    
  //flow
    noStroke();
    for(Maru maru:maruhairetu){
      maru.draw();
    }
    */

/*
if(otherText[i][1]=="0"){
        fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
        OtherCircle(i);
        if(cos(radians(cnt)) == -1&&loopcnt%3==1){
          //otherText[3][1] = "2";
        }
        if(cos(radians(cnt)) == -1&&loopcnt%3==2){
          //otherText[1][1] = "1";
        }
      }else if(var(otherText[i][1])==1){
        if(cos(radians(cnt))>-0.99){
          fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
          OtherCircle(i);
        }else{
          fill(250,250,250);
          OtherCircle(i);
          otherText[i][1]="2";
        }
      }else if(var(otherText[i][1])==2){
      fill(250,250,250);
          OtherCircle(i);
          if(cos(radians(cnt)) == -1&&loopcnt%3==0){
          otherText[i][1]="0";
        }
      }*/

