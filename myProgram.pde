float a=0; 
int cwidth[]={200,500,800,1100,300,600,900,200,500,800,1100};
int cheight[]={200,200,200,200,500,500,500,800,800,800,800};
int owidth[]={550,570,550,640,740, 260,850,1030,760};
int oheight[]={1070,670,350,310,400,650,1350,1070,920};
int textnum = 0;
int grdnum = 0;
//int frameCnt = 0;
float frameCnt[] = {200,200,0,0,100,0,0,0,0,0,0};
PImage img;
int numFrames = 12; //アニメーションのフレーム数
PImage[] images = new PImage[numFrames];

float rSize0[] ={500,500,500,500,500,500,500,500,500,500,500};
float rSize[] = {500,500,500,500,500,500,500,500,500,500,500};
float lSize[]  = {0};
float radius  = 200;
int collision = 0;
color col1, col2;
float Rcol[]={0,0,0,0,0,0,0,147};
float Gcol[]={230,230,173,0};
float Bcol[]={115,211,230,160};
int colornum[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
float applyX =0;
float applyY =0;
float distance[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};;
Maru[] maruhairetu;
ArrayList<PG> pgl = new ArrayList<PG>();

String titleText[][]=
{{"エデュケーション","エデュケーション",},
{"ライフイベント","ライフイベント",},
{"ライフバリュー","ライフバリュー",},
{"ワークスタイル","ワークスタイル",},
{"エンタテイメント","エンタテイメント",},
{"ヘルスケア","ヘルスケア",},
{"メディカル","メディカル",},
{"ライフライン","ライフライン",},
{"マニュファクチュア","マニュファクチュア",},
{"サプライチェーン","サプライチェーン",},
{"マネジメント","マネジメント",},
};

String bigText[][]=
{{"能力と社会性の変化","能力と社会性の変化",},
{"社会通念と手続きの変化","社会通念と手続きの変化",},
{"生活と価値観の変化","生活と価値観の変化",},
{"職業と人生観の変化","職業と人生観の変化",},
{"余暇と気晴らしの変化","余暇と気晴らしの変化",},
{"個人情報とプライバシーの変化","個人情報とプライバシーの変化",},
{"医療知識と一般常識の変化","医療知識と一般常識の変化",},
{"人・社会との繋がりの変化","人・社会との繋がりの変化",},
{"の変化","の変化",},
{"所属意識の変化","所属意識の変化",},
{"責任領域の変化","責任領域の変化",},
};
String smallText0[][]=
{{"教材の\nオンライン化", "リモート\n学習状況\nの管理", "遠隔での\n社会性\n人間関係教育", "非登校型\n教育機会の\n選択自由化"},
{"冠婚葬祭の\n録画・記録", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VR技術で\n五感体験を\n拡張する"},
{"安全な生活\nの確保が\n第一に", "思いやり\n社会的距離\nを保つ", "料理や内装\nDIYが進む", "生き残るため\nエコシステム\nの形成"},
{"デジタル\nワークスタイル\nの確立", "出勤不要が\n職業選択の\n基準になる", "自粛による\n需要変動\n季節労働化", "スキルの多角化\nマルチキャリア"},
{"定期購読\nエンタメ\nの日常化", "体を動かす\nレジャー\nオンライン\nアクティビティ", "オンライン\nでの一体感\nトキ消費", "オン・オフ\n区分けが\nなくなる"},
{"遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫パスポート\n免疫情報での\n人物評価"},
{"電子カルテ\n病院間での\n医療履歴共有", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"},
{"災害状況の\n情報伝達", "宅配ビジネス\nの発展", "代用品の\n自作・流通", "補助社会機能\n自浄作用"},
{"防疫製品の\n生産に着手", "工場設備\nの転用", "企業買収合併\nオープン\nイノベーション", "製造拠点\nのシェア"},
{"輸出入に\n頼らない\n製造ライン", "都市計画\n国内自給\n体制を構築", "一次〜三次\n産業バランス\nが変わる", "地産地消の\n意識が根付く"},
{"企業の\n持続可能性\nの検討", "社会課題\nに即した\n提供価値", "人材ストレス管理・環境整備", "即断即決\n独自行動規範"},
{"", "", "", ""},
};

String smallText1[][]=
{{"教材の\nオンライン化", "リモート\n学習状況\nの管理", "遠隔での\n社会性\n人間関係教育", "非登校型\n教育機会の\n選択自由化"},
{"冠婚葬祭の\n録画・記録", "冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VR技術で\n五感体験を\n拡張する"},
{"安全な生活\nの確保が\n第一に", "思いやり\n社会的距離\nを保つ", "料理や内装\nDIYが進む", "生き残るため\nエコシステム\nの形成"},
{"デジタル\nワークスタイル\nの確立", "出勤不要が\n職業選択の\n基準になる", "自粛による\n需要変動\n季節労働化", "スキルの多角化\nマルチキャリア"},
{"定期購読\nエンタメ\nの日常化", "体を動かす\nレジャー\nオンライン\nアクティビティ", "オンライン\nでの一体感\nトキ消費", "オン・オフ\n区分けが\nなくなる"},
{"遺伝・生体\n情報から\n疾病を予測", "集団免疫\n防疫連帯意識", "大規模検査\n健康情報開示", "免疫パスポート\n免疫情報での\n人物評価"},
{"電子カルテ\n病院間での\n医療履歴共有", "在宅診察\nオンライン治療", "医療に\n詳しくなる\n健康意識\nの向上", "医療人材教育\n転用可能な\n人材管理"},
{"災害状況の\n情報伝達", "宅配ビジネス\nの発展", "代用品の\n自作・流通", "補助社会機能\n自浄作用"},
{"防疫製品の\n生産に着手", "工場設備\nの転用", "企業買収合併\nオープン\nイノベーション", "製造拠点\nのシェア"},
{"輸出入に\n頼らない\n製造ライン", "都市計画\n国内自給\n体制を構築", "一次〜三次\n産業バランス\nが変わる", "地産地消の\n意識が根付く"},
{"企業の\n持続可能性\nの検討", "社会課題\nに即した\n提供価値", "人材ストレス管理・環境整備", "即断即決\n独自行動規範"},
{"", "", "", ""},
};

String otherText[][]=
{{"フェイクニュース\nの横行","0"},
{"地産地消の\n意識が育つ","0"},
{"株価の暴落","0"},
{"遠隔×ライブ\nエンタテイメント","0"},
{"医師不足\n医療崩壊","0"},
{"経済圏の\nブロック化","0"},
{"生活全般での\nDIY化が進む","0"},
{"行き過ぎた\n清潔観・差別","0"},
{"デジタル化\nによる失業","0"},
{"パーソナル\nスペースと\n心理的距離の拡大","0"},
{},
};

void setup(){
  PFont font = createFont("NotoSansCJKjp-Regular",50);
  textFont (font);
  size(1400,1000);
  noStroke();
  //background(0);
  background(255);
  smooth();
  col1 = color(0);
  col2 = color(20);
  
  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
    maruhairetu[i]=maru;
  } 
  images[0] = loadImage("savings.png");
  images[1] = loadImage("management.png");
  images[2] = loadImage("investment.png");
  images[3] = loadImage("customer_service.png");
  images[4] = loadImage("production.png");
  images[5] = loadImage("consumption.png");
  images[6] = loadImage("supply_chain.png");
  images[7] = loadImage("user.png");
  images[8] = loadImage("user.png");
  images[9] = loadImage("user.png");
  images[10] = loadImage("user.png");
  images[11] = loadImage("user.png");
}

void draw(){
  //背景
  noStroke();
  fill(255,255,255);
  rect(0,0,width,height);
  
   //円
  for(Maru maru:maruhairetu){
        maru.draw();
      }
  for(int i=0; i<cwidth.length;i++){
    myCircle(cwidth[i], cheight[i],rSize0[i]/2) ;
    BigCircle(i);
    if (1000 * sin(radians(frameCnt[i])) > 0) {
      lSize[0] += 0.1;
      textnum = 0;
    } else {
      lSize[0] += 0.1;
      textnum = 1;
    }*/
    if(sin(radians(frameCnt[i])) == 1){
          colornum[i] += 1;
          if(colornum[i]==4){
            colornum[i]=0;
          }
        }
        wave(i);
        fill(255);
        noStroke();
        rect(cwidth[i]-50, cheight[i]+52-rSize0[i]/4,100, 16);
        rect(cwidth[i]-100, cheight[i]-15,200, 30);
        fill(0);
        noStroke();
        image(images[i], cwidth[i]-10, cheight[i]+20-rSize0[i]/4, 20, 25);
        textSize(12);
        textAlign(CENTER,CENTER);
        text(bigText[i][collision], cwidth[i], cheight[i]);
        textSize(10);
        textAlign(CENTER,CENTER);
        text(titleText[i][collision], cwidth[i], cheight[i]+60-rSize0[i]/4);
      }
      for (int i = pgl.size() - 1; i >= 0; i--) {
        PG pg = pgl.get(i);
        if (pg.dead) {
          pgl.remove(i);
        } else {
          pg.draw();
        }
      }
      //Collision
      for(int i=0; i<cwidth.length;i++){
        for(int ii=0; ii<cwidth.length;ii++){
          if(i!=ii){
            if(dist(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
              print(dist(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii]));
              pgl.add(new PG(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3, 2, 1));
            }else if(dist(cwidth[i]+distance[i]*2/3,cheight[i]-distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
              pgl.add(new PG(cwidth[i]+distance[i]*2/3,cheight[i]-distance[i]*2/3, 2, 1));
            }else if(dist(cwidth[i]-distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
              pgl.add(new PG(cwidth[i]-distance[i]*2/3,cheight[i]+distance[i]*2/3, 2, 1));
            }else if(dist(cwidth[i]-distance[i]*2/3,cheight[i]-distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
              pgl.add(new PG(cwidth[i]-distance[i]*2/3,cheight[i]-distance[i]*2/3, 2, 1));
            }
          }
        } 
      }
    }
 
 void wave(int i){
    distance[i] = 100;
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
    collision = 0;
  }
  
void BigCircle(int i){
  noFill();
  fill(100,20);
  stroke(0,0,0);
  strokeWeight(0.1);
  noStroke();
  ellipse(cwidth[i], cheight[i],rSize0[i],rSize0[i]);
}

class Maru{
  float x,a;
  Maru(float x, float a){
    this.x=x;
    this.a=a;
  }
  void draw(){
      //if (mousePressed)
      //{
        for(int i=0; i<cwidth.length;i++){
          fill(0);
          //fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize0[i]*cos(a)/4, cheight[i]+rSize0[i]*sin(a)/4,3,3);
        }
    //}
  }
}

class PG {
  ArrayList<P> pl;
  int num;
  int r;
  boolean dead;
  
  public PG(float x, float y, int num, int r) {
    pl = new ArrayList<P>();
    this.num = num;
    this.r = r;
    for (int i = 0; i < num; i++) {
      float xx = x + random(-r, r);
      float yy = y + random(-r, r);
      pl.add(new P(xx, yy, r, atan2(yy-y, xx-x), random(0.3, 3))); //3は初速の上限
    }
  }

  void draw() {
    for (int i = pl.size() - 1; i >= 0; i--) {
      P p = pl.get(i);
      p.update();
      if (p.dead) {
        pl.remove(i);
        if (pl.size() == 0) dead = true;
      } else {
        p.draw();
      }
    }
  }

  class P {
    float x, y;
    float r;
    float th;
    float sp;
    boolean dead = false;
    
    public P(float x, float y, float r, float th, float sp) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.th = th; //0 - TWO_PI
      this.sp = sp;
    }
    
    void update() {
      if (dead) return;
      x += sp * cos(th);
      y += sp * sin(th);
      sp *= 0.98; //0.99を変えると減速速度が速くなる
      if (x < 0 || x > width) dead = true;
      if (y < 0 || y > height) dead = true;
      if (sp < 1) dead = true;
    }
    
    void draw() {
      noStroke();
      fill(255, sp * 255 * random(0, 1)); //randomは明滅するため
      //      ellipse(x, y, r, r);
      rect(x, y, r, r);
    }
  }
}

void myCircle(float centerX, float centerY, float diameter) {
  strokeWeight(2); //点の大きさは8ピクセル
  stroke(0,0,255); //点の色は青
  float radius = diameter/2;
  int count = 2000;
  for (int i = 0; i < count; i ++) {
    float angle = random(TWO_PI);
    float r = sqrt(random(1));
    float x = centerX + r * radius * cos(angle);
    float y = centerY + r * radius * sin(angle);
    point(x, y);
  }
}


    /*
    for (int i = pgl.size() - 1; i >= 0; i--) {
    PG pg = pgl.get(i);
    if (pg.dead) {
      pgl.remove(i);
    } else {
      pg.draw();
    }
  }
    
//Collision
   for(int i=0; i<cwidth.length;i++){
     for(int ii=0; ii<cwidth.length;ii++){
         if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
           pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
     } 
   }
   
//line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
  line(cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
  line(cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3, cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
    
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
      }else if(int(otherText[i][1])==1){
        if(cos(radians(cnt))>-0.99){
          fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
          OtherCircle(i);
        }else{
          fill(250,250,250);
          OtherCircle(i);
          otherText[i][1]="2";
        }
      }else if(int(otherText[i][1])==2){
      fill(250,250,250);
          OtherCircle(i);
          if(cos(radians(cnt)) == -1&&loopcnt%3==0){
          otherText[i][1]="0";
        }
      }*/
